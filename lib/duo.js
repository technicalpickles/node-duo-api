'use strict';

var crypto = require('crypto');
var request = require('request');
var async = require('async');

module.exports = function(config) {
    if (!config.host || !config.ikey || !config.skey) {
        throw new Error('Invalid client configuration. Please check the values for host, ikey, and skey'.);
    }
    this.host = config.host;
    this.ikey = config.ikey;
    this.skey = config.skey;
};

module.exports.prototype.request = function(method, path, params) {
    var methodUpper = method.toUpperCase();
    var sig = sign(methodUpper, this.host.toLowerCase(), path, params, this.skey, this.ikey);
    var req = {
        method: methodUpper,
        headers: {
            'Date': sig.date,
            'Authorization': sig.authorization
        }
    };
    req.url = this.host;
    if (path.indexOf('/') !== 0) {
        req.url += '/';
    }
    req.url += path;

    if (methodUpper === 'GET' || methodUpper === 'DELETE') {
        req.url += '/' + sig.serializedParams
    } else {
        req.body = sig.serializedParams;
    }
};

var sign = function(method, host, path, params, skey, ikey) {
    var now = new Date();
    var serializedParams = serializeParams(params);
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
