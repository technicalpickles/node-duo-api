'use strict';

var should = require('chai').should();
var duo = require('../index');
var async = require('async');
var fs = require('fs');

var duoConnInfo = {};

describe('Duo Security Admin API Node Client', function() {
    before(function(done) {
        async.waterfall([
            function(cb) {
                var duoConnInfo = process.env.DUO_CONN_INFO;
                if (!duoConnInfo) {
                    return cb(true, null);
                }

                fs.readFile(duoConnInfo, function(err, data) {
                    return cb(err, data);
                });
            }
        ],
        function(err, data) {
            if (!err) {
                duoConnInfo = JSON.parse(data);
                done();
            } else {
                throw new Error(
                    [
                        'Couldn\'t read duo connection info file.',
                        'Please check that the environment variable DUO_CONN_INFO is set to a valid filepath.'
                    ].join(' ')
                );
            }
        });
    });

    it('should create an instance of itself', function() {
        var client = new duo(duoConnInfo);
        client.should.be.an('object');
    });
});
