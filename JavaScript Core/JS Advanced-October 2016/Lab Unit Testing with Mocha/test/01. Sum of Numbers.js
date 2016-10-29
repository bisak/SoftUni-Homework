let expect = require("chai").expect;
function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

describe("sum(arr)", function() {
    it("should return 3 for [1, 2]", function() {
        expect(sum([1, 3])).to.be.equal(4);
    });
    it("should return 6 for [3, 3]", function() {
        expect(sum([3, 3])).to.be.equal(6);
    });
    it("should return -50 for [-25, -25]", function() {
        expect(sum([-25, -25])).to.be.equal(-50);
    });
    it("should return 0 for [0, 0]", function() {
        expect(sum([0, 0])).to.be.equal(0);
    });
});