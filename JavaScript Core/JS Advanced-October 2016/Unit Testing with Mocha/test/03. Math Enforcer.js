let expect = require("chai").expect;
let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe("mathEnforcer", function () {
    describe("addFive", function () {
        it('should return 5 for (0)', function () {
            expect(mathEnforcer.addFive(0)).be.equal(5);
        });
        it('should return 5 for (-0)', function () {
            expect(mathEnforcer.addFive(-0)).be.equal(5);
        });
        it('should return 10 for (5)', function () {
            expect(mathEnforcer.addFive(5)).be.equal(10);
        });
        it('should return 10.01 for (10.01)', function () {
            expect(mathEnforcer.addFive(5.01)).be.equal(5.01 + 5);
        });
        it('should return 0 for (-5)', function () {
            expect(mathEnforcer.addFive(-5)).be.equal(0);
        });
        it('should return -5 for (-10)', function () {
            expect(mathEnforcer.addFive(-10)).be.equal(-5);
        });
        it('should return -0.01 for (-5.01)', function () {
            expect(mathEnforcer.addFive(-5.01)).be.equal(-5.01 + 5);
        });
        it('should return undefined for "69"', function () {
            expect(mathEnforcer.addFive('69')).be.equal(undefined);
        });
        it('should return undefined for ""', function () {
            expect(mathEnforcer.addFive('')).be.equal(undefined);
        });
        it('should return undefined for []', function () {
            expect(mathEnforcer.addFive([])).be.equal(undefined);
        });
        it('should return undefined for {}', function () {
            expect(mathEnforcer.addFive({})).be.equal(undefined);
        });
        it('should return undefined for ', function () {
            expect(mathEnforcer.addFive()).be.equal(undefined);
        });
    });
    describe("subtractTen", function () {
        it('should return 0 for (10)', function () {
            expect(mathEnforcer.subtractTen(10)).be.equal(0);
        });
        it('should return 0 for (-10)', function () {
            expect(mathEnforcer.subtractTen(0)).be.equal(-10);
        });
        it('should return -0 for (-10)', function () {
            expect(mathEnforcer.subtractTen(-0)).be.equal(-10);
        });
        it('should return -4.99 for (10.01)', function () {
            expect(mathEnforcer.subtractTen(5.01)).be.equal(5.01 - 10);
        });
        it('should return -20 for (-10)', function () {
            expect(mathEnforcer.subtractTen(-10)).be.equal(-20);
        });
        it('should return -15.01 for (-5.01)', function () {
            expect(mathEnforcer.subtractTen(-5.01)).be.equal(-5.01 - 10);
        });
        it('should return undefined for "69"', function () {
            expect(mathEnforcer.subtractTen('69')).be.equal(undefined);
        });
        it('should return undefined for ""', function () {
            expect(mathEnforcer.subtractTen('')).be.equal(undefined);
        });
        it('should return undefined for ', function () {
            expect(mathEnforcer.subtractTen()).be.equal(undefined);
        });
        it('should return undefined for []', function () {
            expect(mathEnforcer.subtractTen([])).be.equal(undefined);
        });
        it('should return undefined for {}', function () {
            expect(mathEnforcer.subtractTen({})).be.equal(undefined);
        });
    });
    describe("sum", function () {
        it('should return undefined for ("pesho","gosho")', function () {
            expect(mathEnforcer.sum('pesho', 'gosho')).be.equal(undefined);
        });
        it('should return undefined for (69,"gosho")', function () {
            expect(mathEnforcer.sum(69, 'gosho')).be.equal(undefined);
        });
        it('should return undefined for ("pesho",69)', function () {
            expect(mathEnforcer.sum('pesho', 69)).be.equal(undefined);
        });
        it('should return undefined for ("69","69")', function () {
            expect(mathEnforcer.sum('69', '69')).be.equal(undefined);
        });
        it('should return undefined for ("","")', function () {
            expect(mathEnforcer.sum('', '')).be.equal(undefined);
        });
        it('should return undefined for ()', function () {
            expect(mathEnforcer.sum()).be.equal(undefined);
        });
        it('should return undefined for ([], [])', function () {
            expect(mathEnforcer.sum([], [])).be.equal(undefined);
        });
        it('should return undefined for ([])', function () {
            expect(mathEnforcer.sum([])).be.equal(undefined);
        });
        it('should return undefined for ({},{})', function () {
            expect(mathEnforcer.sum({}, {})).be.equal(undefined);
        });
        it('should return undefined for ({})', function () {
            expect(mathEnforcer.sum({})).be.equal(undefined);
        });
        it('should return 10 for (5,5)', function () {
            expect(mathEnforcer.sum(5, 5)).be.equal(10);
        });
        it('should return -10 for (-5,-5)', function () {
            expect(mathEnforcer.sum(-5, -5)).be.equal(-10);
        });
        it('should return -10.01 for (-5,-5)', function () {
            expect(mathEnforcer.sum(-5, -5.01)).be.equal(-5 - 5.01);
        });
        it('should return 10.01 for (5,5)', function () {
            expect(mathEnforcer.sum(5, 5.01)).be.equal(5 + 5.01);
        });
        it('should return 0 for (0,0)', function () {
            expect(mathEnforcer.sum(0, 0)).be.equal(0);
        });
        it('should return 0 for (-0,-0)', function () {
            expect(mathEnforcer.sum(-0, -0)).be.equal(0);
        });
    });
});