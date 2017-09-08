var calc = require("../app/calc");

describe("Calculator", function(){
    it("returns an integer", function(done){
        expect(calc.equilize(0, [])).toBe(0);
         done();
    })

    it("returns zero when only 1 person", function(done){
        expect(calc.equilize(0, [10, 20])).toBe(0);
         done();
    })

    it("returns 10 when there are 2 people and 20 spent", function(done){
        expect(calc.equilize(2, [20])).toBe(10);
         done();
    })

    it("returns 40 when there are 3 people and 60 spent", function(done){
        expect(calc.equilize(3, [10,20,30])).toBe(40);
         done();
    })
});