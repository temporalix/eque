var expect = require('chai').expect;
var request = require('request');

var base_url = "http://localhost:3000/";


describe('Status and content', function () {
            it('Accessible', function () {
                request.get(base_url, function (error, response, body) {
                    expect(response.statusCode).toBe(200)
                });
            })

            it('Main page content', function () {
                request.get(base_url, function (error, response, body) {
                    expect(body).toBe("index");
                });
            })
});