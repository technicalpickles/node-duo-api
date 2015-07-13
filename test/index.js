'use strict';

var should = require('chai').should();
var duo = require('../index');
var fs = require('fs');

var duoConnInfo = {};

describe('Duo Security Admin API Node Client', function() {

    beforeEach(function() {
        this.client = new duo({
            host: process.env.DUO_API_HOST,
            ikey: process.env.DUO_API_IKEY,
            skey: process.env.DUO_API_SKEY
        });
    });

    it('should create and instance of itself', function() {
        this.client.should.be.an('object');
    });

    it('should retrieve users', function() {
        this.client.request('get', '/admin/v1/users', {one: 'a', two:'b', three:'c'});
    });
});
