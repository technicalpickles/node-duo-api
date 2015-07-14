'use strict';

var should = require('chai').should();
var duo = require('../index');

describe('Duo Security Admin API Node Client', function() {

    beforeEach(function() {
        this.client = new duo({
            host: process.env.DUO_API_HOST,
            ikey: process.env.DUO_API_IKEY,
            skey: process.env.DUO_API_SKEY
        });
    });

    it('should create an instance of itself', function() {
        this.client.should.be.an('object');
    });

    it('should retrieve users', function(done) {
        var req = this.client.request('get', '/admin/v1/users');
        req.then(function(users) {
            console.log(users);
            done();
        })
        .fail(function(error) {
            console.log(error);
            done();
        });
    });
});
