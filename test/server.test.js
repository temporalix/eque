// var expect = require('chai').expect;
// var request = require('request');

// var base_url = "http://localhost:3000/";


// describe('Status and content', function () {
//             it('Accessible', function () {
//                 request.get(base_url, function (error, response, body) {
//                     expect(response.statusCode).toBe(200);
//                 });
//             });

//             // it('Main page content', function () {
//             //     request.get(base_url, function (error, response, body) {
//             //         expect(body).toBe("index");
//             //     });
//             // })
// });




// process.env.NODE_ENV = 'test';




let expect = require('chai').expect;
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);
chai.use(require('chai-like'));
chai.use(require('chai-things'));
// var calc = require("../app/scripts/calc");

describe("Server", function () {
    it("should return error when no parameters sent", function (done) {
        chai.request(server)
            .post('/')
            .end(function (err, res) {
                res.should.have.status(400);
                expect(err).to.not.be.null;
                expect(res.text).to.eql("no data sent");
                done();
            });
    });

    it("should return error when the number of students is greater than 1000", function (done) {
        chai.request(server)
            .post('/')
            .send([{ people: 1001, rows: [10, 20, 30] }])
            .end(function (err, res) {
                 res.should.have.status(400);
                expect(err).to.not.be.null;
                 expect(res.text).to.eql("number of students cannot be over 1000");
                done();
            });
    });

        it("should return error when the amount spent by a single student is greater than 10000", function (done) {
        chai.request(server)
            .post('/')
            .send([{ people: 1, rows: [5000,5001] }])
            .end(function (err, res) {
                 res.should.have.status(400);
                expect(err).to.not.be.null;
                expect(res.text).to.eql("amount spent by a single student cannot be more than 10000");
                done();
            });
    });


    it("should return zero when for 1 person with data", function (done) {
        chai.request(server)
            .post('/')
            .send([{ people: 1, rows: [10, 20, 30] }])
            .end(function (err, res) {
                res.should.have.status(200);
                expect(err).to.be.null;
                res.body.should.be.a('array');
                res.body.length.should.be.eql(1);
                expect(res.body).to.deep.equal([0]);
                done();
            });
    });
    // it("returns zero when only 1 person", function(done){
    //     expect(calc.equilize(0, [10, 20])).to.equal(0);
    //      done();
    // })

    // it("returns 10 when there are 2 people and 20 spent", function(done){
    //     expect(calc.equilize(2, [20])).to.equal(10);
    //      done();
    // })

    // it("returns 40 when there are 3 people and 60 spent", function(done){
    //     expect(calc.equilize(3, [10,20,30])).to.equal(40);
    //      done();
    // })
});