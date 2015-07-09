'use strict';

var request = require('request');
var async = require('async');

module.exports = function(config) {
    this.url = config.url;
    this.ikey = config.ikey;
    this.skey = config.skey;
};

var sign = function(method, host, path, params, skey, ikey) {
    var now = new Date();
};
