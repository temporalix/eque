var request = require("request");

var base_url = "http://localhost:3000/";

describe("index", function() {
    describe("GET /", function(){
        it("return status code 200", function(done){
            request.get(base_url, function(error, response, body){
                expect(response.statusCode).toBe(200);
                done();
            });
        });

        it("returns index", function(done){
            request.get(base_url, function(error, response, body){
                expect(body).toBe("index");
                done();
            });
        });
    });
});