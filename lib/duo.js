'use strict';

var crypto = require('crypto');
var request = require('request');
var Q = require('q');

module.exports = function(config) {
    if (!config || !config.host || !config.ikey || !config.skey) {
        throw new Error('Invalid client configuration. Please check the values for host, ikey, and skey.');
    }
    this.host = config.host;
    this.ikey = config.ikey;
    this.skey = config.skey;
};

module.exports.prototype.request = function(method, path, params, cb) {
    var deferred = Q.defer();
    var methodUpper = method.toUpperCase();
    var sig = sign(methodUpper, this.host.toLowerCase(), path, params, this.skey, this.ikey);
    var req = {
        method: methodUpper,
        headers: {
            'Date': sig.date,
            'Authorization': sig.authorization
        }
    };
    req.url = 'https://' + this.host;
    if (path.indexOf('/') !== 0) {
        req.url += '/';
    }
    req.url += path;

    if (sig.serializedParams.length) {
        if (methodUpper === 'GET' || methodUpper === 'DELETE') {
            req.url += '?' + sig.serializedParams;
        } else {
            req.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            req.body = sig.serializedParams;
        }
    }

    request(req, function(error, response, body) {
        var parsedBody = JSON.parse(body);
        if (!error && response.statusCode === 200) {
            deferred.resolve(parsedBody);
        } else {
            deferred.reject({
                error: error,
                statusCode: response.statusCode,
                body: parsedBody
            });
        }
    });

    console.log(sig.date);

    deferred.promise.nodeify(cb);
    return deferred.promise;
};

var sign = function(method, host, path, params, skey, ikey) {
    var now = new Date().toUTCString();
    var serializedParams = (params ? serializeParams(params) : '');
    var canon = [
        now,
        method,
        host,
        path,
        serializedParams
    ].join('\n');
    var sig = crypto
        .createHmac('sha1', skey)
        .update(canon)
        .digest('hex');
    var auth = ikey + ':' + sig;
    return {
        date: now,
        authorization: 'Basic' + ' ' + new Buffer(auth).toString('base64'),
        serializedParams: serializedParams
    };
};

var serializeParams = function(params) {
    var sortedKeys = Object.keys(params).sort();
    var serializedParams = '';
    var delimiter = '';
    sortedKeys.forEach(function(k) {
        serializedParams += delimiter;
        serializedParams += encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
        delimiter = '&';
    });
    return serializedParams;
};
