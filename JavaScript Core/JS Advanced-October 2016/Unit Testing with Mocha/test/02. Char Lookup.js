let expect = require("chai").expect;
function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}


describe("lookupChar(string, index)", function () {
    it("should return undefined for 69, 'pesho'", function () {
        expect(lookupChar(69, 'pesho')).to.be.equal(undefined);
    });
    it("should return undefined for 'pesho', 'pesho'", function () {
        expect(lookupChar('pesho', 'pesho')).to.be.equal(undefined);
    });
    it("should return undefined for 69, 69", function () {
        expect(lookupChar(69, 69)).to.be.equal(undefined);
    });
    it("should return Incorrect index for 'pesho', 3.14", function () {
        expect(lookupChar('pesho', 3.14)).to.be.equal(undefined);
    });
    it("should return Incorrect index for 'pesho', 69", function () {
        expect(lookupChar('pesho', 69)).to.be.equal("Incorrect index");
    });
    it("should return Incorrect index for 'pesho', -69", function () {
        expect(lookupChar('pesho', -69)).to.be.equal("Incorrect index");
    });
    it("should return Incorrect index for 'pesho', -69", function () {
        expect(lookupChar('pesho', 5)).to.be.equal("Incorrect index");
    });
    it("should return Incorrect index for 'pesho', 0", function () {
        expect(lookupChar('pesho', 0)).to.be.equal("p");
    });
    it("should return Incorrect index for 'stamat', 2", function () {
        expect(lookupChar('stamat', 2)).to.be.equal("a");
    });
    it("should return Incorrect index for 'pesho', 4", function () {
        expect(lookupChar('pesho', 4)).to.be.equal("o");
    });
});