let expect = require("chai").expect;
function createCalculator() {
    let value = 0;
    return {
        add: function (num) {
            value += Number(num);
        },
        subtract: function (num) {
            value -= Number(num);
        },
        get: function () {
            return value;
        }
    }
}

describe("createCalculator()", function () {
    let calc;
    beforeEach(function () {
        calc = createCalculator();
    });
    it("should return 5 after {add 3; add 2}", function () {
        calc.add(3);
        calc.add(2);
        let value = calc.get();
        expect(value).to.be.equal(5);
    });
    it("should return 0 after {add 0; add 0}", function () {
        calc.add(0);
        calc.add(0);
        let value = calc.get();
        expect(value).to.be.equal(0);
    });
    it("should return 0", function () {
        let value = calc.get();
        expect(value).to.be.equal(0);
    });
    it("should return Nan after add 'gosho' add 'pesho}", function () {
        calc.add('gosho');
        calc.add('pesho');
        let value = calc.get();
        expect(value).to.be.NaN;
    });
    it("should return 10 after add '5' add '5", function () {
        calc.add('5');
        calc.add('5');
        let value = calc.get();
        expect(value).to.be.equal(10);
    });
    it("should return 4.1 after add 5.2 add 1.1", function () {
        calc.add(5.2);
        calc.subtract(1.1);
        let value = calc.get();
        expect(value).to.be.equal(4.1);
    });
    it("should return 4.2 after add 5.3 add 1.1", function () {
        calc.add(5.3);
        calc.subtract(1.1);
        let value = calc.get();
        expect(value).to.be.equal(5.3-1.1);
    });
    it("should return 4.2 after add 5.3 add 1.1", function () {
        calc.add(Number.NEGATIVE_INFINITYI);
        calc.subtract(Number.POSITIVE_INFINITY);
        let value = calc.get();
        expect(value).to.be.NaN;
    });
    it("should return 5 after add 5", function () {
        calc.add(5);
        let value = calc.get();
        expect(value).to.be.equal(5);
    });
    it("should return -5 after add 5", function () {
        calc.add(-5);
        let value = calc.get();
        expect(value).to.be.equal(-5);
    });
    it("should return 5 after subtract -5", function () {
        calc.subtract(-5);
        let value = calc.get();
        expect(value).to.be.equal(5);
    });
    it("should return -5 after subtract 5", function () {
        calc.subtract(5);
        let value = calc.get();
        expect(value).to.be.equal(-5);
    });
});
