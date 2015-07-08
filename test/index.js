'use strict';

var should = require('chai').should();
var duo = require('../index');
var async = require('async');
var fs = require('fs');

describe('Duo Security Admin API Node Client', function() {
    before(function(done) {
        async.waterfall([
            function(cb) {
                fs.readFile('duocreds.json', function(err, data) {
                    cb(err, data);
                });
            }
        ],
        function(err, data) {
            if (!err) {
                this.creds = JSON.parse(data);
                done();
            } else {
                throw new Error('Couldn\'t read duo credentials file.');
            }
        });
    });

    it('should create an instance of itself', function() {
        var client = new duo({
                url: 'https://api-312a1404.duosecurity.com'
            });
        client.should.be.an('object');
    });
});
