'use strict';

var request = require('request');
var async = require('async');

module.exports = function(config) {
    this.url = config.url;
    this.key = config.key;
};
