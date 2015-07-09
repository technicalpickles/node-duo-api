'use strict';

var crypto = require('crypto');
var request = require('request');
var async = require('async');

module.exports = function(config) {
    this.url = config.url;
    this.ikey = config.ikey;
    this.skey = config.skey;
};

module.exports.prototype.

var sign = function(method, host, path, params, skey, ikey) {
    var now = new Date();
    var canon = [
        now,
        method.toUpperCase(),
        host.toLowerCase(),
        path,
        serializeParams(params)
    ].join('\n');
    var sig = crypto
        .createHmac('sha1', skey)
        .update(canon)
        .digest(hex);
    var auth = ikey + ':' + sig;
    return {
        'Date': now,
        'Authorization': auth
    };
};

var serializeParams = function(params) {
    var sortedKeys = Object.keys(params).sort();
    var serializedParams = '';
    var delimiter = '';
    sortedKeys.forEach(function(k) {
        serializedParams += delimiter;
        serializedParams += encodeURIComponent(k) + '='+ encodeURIComponent(params[k]);
        delimiter = '&';
    });
    return serializedParams;
};
