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

    describe('Base request method', function() {

        it('should complete basic account info request', function () {
            return this.client.request('get', '/admin/v1/info/summary').then(function (info) {
                info.stat.should.equal('OK');
            });
        });

    });
});
