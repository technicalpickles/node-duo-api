'use strict';

var should = require('chai').should();
var duo = require('../index');

describe('Duo Security Admin API Node Client', function() {
    it('should create an instance of itself', function() {
        var client = new duo({url: 'https://duosecurity.com'});
    });
});
