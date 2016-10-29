let expect = require("chai").expect;
function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

describe("rgbToHexColor(red,green,blue)", function () {
    it('should return #B0171F on rgbToHexColor(176,	23,	31)', () => {
        expect(rgbToHexColor(176, 23, 31)).to.equal('#B0171F');
        expect(rgbToHexColor(176, 23, 31)).to.be.an('string');
    });

    it("should return #FFFFFF for rgbToHexColor(255, 255, 255)", function () {
        expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
    });
    it("should return #000000 for rgbToHexColor(0, 0, 0)", function () {
        expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
    });
    it("should return undefined for rgbToHexColor(-69, 0, 0)", function () {
        expect(rgbToHexColor(-69, 0, 0)).to.be.undefined;
    });
    it("should return undefined for rgbToHexColor(6969696, 0, -256)", function () {
        expect(rgbToHexColor(6969696, 0, -256)).to.be.undefined;
    });
    it("should return undefined for rgbToHexColor()", function () {
        expect(rgbToHexColor()).to.be.undefined;
    });
    it("should return undefined for rgbToHexColor(pesho)", function () {
        expect(rgbToHexColor('pesho')).to.be.undefined;
    });
    it("should return undefined for rgbToHexColor(69)", function () {
        expect(rgbToHexColor(69)).to.be.undefined;
    });
    it("should return undefined for rgbToHexColor(0)", function () {
        expect(rgbToHexColor(0)).to.be.undefined;
    });
    it("should return #FF9EAA for rgbToHexColor(255, 158, 170)", function () {
        expect(rgbToHexColor(255, 158, 170)).to.be.equal('#FF9EAA');
    });
    it("should return undefined for rgbToHexColor([])", function () {
        expect(rgbToHexColor([])).to.be.undefined;
    });
    it("should return undefined for rgbToHexColor([68,68,68])", function () {
        expect(rgbToHexColor([-168, -68, -68])).to.be.undefined;
    });
    it('should return undefined on rgbToHexColor(0, 34)', () => {
        expect(rgbToHexColor(0, 34)).to.be.undefined;
    });
    it('should return undefined on rgbToHexColor(0, 34)', () => {
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    });
    it('should return #002264 on rgbToHexColor(0, 34, 100)', () => {
        expect(rgbToHexColor(0, 34, 100)).to.equal('#002264');
    });
    it('should return undefined on rgbToHexColor(0, 34)', () => {
        expect(rgbToHexColor(0, -1, 0, 5)).to.be.undefined;
    });
    it('should return undefined on rgbToHexColor({})', () => {
        expect(rgbToHexColor({})).to.be.undefined;
    });
    it('should return undefined on rgbToHexColor(256, 0, 0)', () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    });
    it('should return undefined on rgbToHexColor(0, 256, 0)', () => {
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
    });
    it('should return undefined on rgbToHexColor(0, 0, 256)', () => {
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });
    it('should return undefined on rgbToHexColor(0, 0, -1)', () => {
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });
    it('should return undefined on rgbToHexColor(0, -1, 0)', () => {
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    });
    it('should return undefined on rgbToHexColor(-1, 0, 0)', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    });
});