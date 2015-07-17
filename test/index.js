'use strict';

var should = require('chai').should();
var duo = require('../index');

describe('Duosecurity Node Client', function() {

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

    describe('and then using promises', function() {

        describe('the request method', function() {

            it('should retrieve basic account information', function () {
                return this.client.request('get', '/admin/v1/info/summary').then(function (info) {
                    info.stat.should.equal('OK');
                });
            });

            it('should retrieve information about a user', function() {
                return this.client.request('get', '/admin/v1/users', {username: 'akohbdc'}).then(function(user) {
                    console.log(user);
                    user.stat.should.equal('OK');
                })
            });

        });

    });

});
