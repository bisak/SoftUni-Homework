let expect = require("chai").expect;
function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

describe("isSymmetric(arr)", function () {
    describe("regular cases", function () {
        it("should return true for [1, 2, 1]", function () {
            expect(isSymmetric([1, 2, 1])).to.be.true;
        });
        it("should return true for [-1, -3,-1]", function () {
            expect(isSymmetric([-1, -3, -1])).to.be.true;
        });
        it("should return false for [1, 2]", function () {
            expect(isSymmetric([1, 2])).to.be.false;
        });
        it("should return true for []", function () {
            expect(isSymmetric([])).to.be.true;
        });
    });

    describe("edge cases", function () {
        it('should return false for ["1", 2, 1]', function () {
            expect(isSymmetric(["1", 2, 1])).to.be.false;
        });
        it("should return true for [1]", function () {
            expect(isSymmetric([1])).to.be.true;
        });
        it("should return true for [[1,2],[2],[1,2]]", function () {
            expect(isSymmetric([[1, 2], [2], [1, 2]])).to.be.true;
        });
        it("should return true for 69 of course", function () {
            expect(isSymmetric(69)).to.be.false;
        });
        it("should return true for empty input", function () {
            expect(isSymmetric()).to.be.false;
        });
        it("should return true for KUREC", function () {
            expect(isSymmetric("KUREC")).to.be.false;
        });
    })

});