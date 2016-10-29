let expect = require("chai").expect;
function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}


describe("isOddOrEven(string)", function() {
    it("should return odd for 'pesho'", function() {
        expect(isOddOrEven('pesho')).to.be.equal("odd");
    });
    it("should return even for 'peshko'", function() {
        expect(isOddOrEven('peshko')).to.be.equal("even");
    });
    it("should return even for ''", function() {
        expect(isOddOrEven('')).to.be.equal("even");
    });
    it("should return odd for 'a'", function() {
        expect(isOddOrEven('a')).to.be.equal("odd");
    });
    it("should return undefined for ", function() {
        expect(isOddOrEven()).to.be.equal(undefined);
    });
    it("should return undefined for 2", function() {
        expect(isOddOrEven(2)).to.be.equal(undefined);
    });
    it("should return undefined for 2", function() {
        expect(isOddOrEven(-2)).to.be.equal(undefined);
    });
    it("should return even for '2'", function() {
        expect(isOddOrEven('2')).to.be.equal('odd');
    });
    it("should return even for '22'", function() {
        expect(isOddOrEven('22')).to.be.equal("even");
    });
    it("should return even for '22'", function() {
        expect(isOddOrEven('-2')).to.be.equal("even");
    });
    it("should return even for '22'", function() {
        expect(isOddOrEven('-22')).to.be.equal("odd");
    });
});