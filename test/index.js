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

    describe('using promise api', function() {

        describe('the request method', function() {

            it('should retrieve basic account information', function () {
                return this.client.request('get', '/admin/v1/info/summary').then(function (res) {
                    res.stat.should.equal('OK');
                });
            });

            it('should retrieve information about a user', function() {
                return this.client.request('get', '/admin/v1/users', {username: process.env.DUO_API_USER}).then(function(res) {
                    res.stat.should.equal('OK');
                    if (process.env.DUO_API_USER) {
                        res.response.length.should.equal(1);
                        res.response.shift().username.should.equal(process.env.DUO_API_USER);
                    } else {
                        res.response.should.be.empty;
                    }
                });
            });

            it('should create a new user');

            it('should enroll the new user');

            it('should delete the enrolled user');

        });

    });

    describe('using callback api', function() {

        describe('the request method', function() {

            it('should retrieve basic account information', function(done) {
                this.client.request('get', '/admin/v1/info/summary', null, function(error, res) {
                    res.stat.should.equal('OK');
                    done();
                });
            });

            it('should retrieve information about a user', function(done) {
                this.client.request('get', '/admin/v1/users', {username: process.env.DUO_API_USER}, function(error, res) {
                    res.stat.should.equal('OK');
                    if (process.env.DUO_API_USER) {
                        res.response.length.should.equal(1);
                        res.response.shift().username.should.equal(process.env.DUO_API_USER);
                    } else {
                        res.response.should.be.empty;
                    }
                    done();
                });
            });

            it('should create a new user');

            it('should enroll the new user');

            it('should delete the enrolled user');

        });

    });

});
