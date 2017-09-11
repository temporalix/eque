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

// var calc = require("../app/scripts/calc");

describe("Server", function(){
    it("Accessible", function(done){
        chai.request(server)
        .post('/')
        //.send({ people: 3, rows:[10,20,30]})
        .end(function(err, res){
            res.should.have.status(200);
            //err.should.be.null;
            expect(err).to.eql({success: false, message: "no data sent"});
           // console.log(res.body);
            // res.body.should.be.a('array');
            // res.body.length.should.be.eql(0);
            done();
        })
        // expect(calc.equilize(0, [])).to.equal(0);
        //  done();
    });

    it("should return zero when for 1 person", function(done){
        chai.request(server)
        .post('/')
        .send({ people: 1, rows:[10,20,30]})
        .end(function(err, res){
            res.should.have.status(200);
            // err.should.be.null;
            // res.body.should.be.a('array');
            // res.body.should.be.eql(0);
            done();
        })
        // expect(calc.equilize(0, [])).to.equal(0);
        //  done();
    })

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