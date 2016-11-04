let expect = require("chai").expect;
class SortedList {
    constructor() {
        this.list = [];
    }

    add(element) {
        this.list.push(element);
        this.sort();
    }

    remove(index) {
        this.vrfyRange(index);
        this.list.splice(index, 1);
    }

    get(index) {
        this.vrfyRange(index);
        return this.list[index];
    }

    vrfyRange(index) {
        if (this.list.length == 0) throw new Error("Collection is empty.");
        if (index < 0 || index >= this.list.length) throw new Error("Index was outside the bounds of the collection.");
    }

    sort() {
        this.list.sort((a, b) => a - b);
    }

    get size() {
        return this.list.length;
    }
}

describe("SortedList", function () {
    let list;
    beforeEach('init the object', function () {
        list = new SortedList();
    });

    function fillTheList(items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 50]) {
        for (let item of items) {
            list.add(item)
        }
        return items.length;
    }

    describe("Check size getter", function () {
        it('should return 0 ', () => {
            list.add(5);
            list.add(10);
            list.remove(1);
            list.remove(0);
            list.add(1);
            expect(list.size).to.be.equal(1);
        });

        it('should return the list size ', () => {
            expect(fillTheList()).to.be.equal(list.size);
        });

        it('should return 1 ', () => {
            expect(list.size).to.be.equal(0);
        });
        it('should return 1 ', () => {
            expect(list.size).to.not.be.above(0);
        });
    });

    describe("Check error throwing", function () {
        it('should throw error 1', () => {
            list.add(500);
            expect(() => {
                list.get(500)
            }).to.throw(Error);
        });
        it('should throw error 2', () => {
            expect(() => {
                list.get(0)
            }).to.throw(Error);
        });
        it('should throw error 3', () => {
            expect(() => {
                list.remove(0)
            }).to.throw(Error);
        });
        it('should throw error 4', () => {
            list.add(500);
            expect(() => {
                list.remove(500)
            }).to.throw(Error);
        });
        it('should throw error 5', () => {
            let lenght = fillTheList();
            expect(() => {
                list.remove(lenght)
            }).to.throw(Error);
        });
        it('should throw error 6', () => {
            let lenght = fillTheList();
            expect(() => {
                list.get(lenght)
            }).to.throw(Error);
        });
        it('should throw error 7', () => {
            fillTheList()
            expect(() => {
                list.get(-20)
            }).to.throw(Error);
        });
        it('should throw error 8', () => {
            fillTheList()
            expect(() => {
                list.remove(-20)
            }).to.throw(Error);
        });
    });

    describe("Check get function", function () {
        it('expect to be equal', () => {
            fillTheList();
            expect(list.get(3)).to.equal(4);
        });
        it('expect to not be equal', () => {
            fillTheList();
            expect(list.get(3)).to.not.equal(5);
        });
        it('expect to be equal', () => {
            fillTheList();
            expect(list.get(0)).to.equal(1);
        });
        it('expect to be equal', () => {
            expect(list.get(fillTheList() - 1)).to.equal(50);
        });
    });

    describe("Check remove function", function () {
        it('expect remove element', () => {
            let len = fillTheList();
            list.remove(3);
            list.remove(3);
            list.remove(3);
            expect(list.size).to.equal(len - 3);
        });
        it('expect to remove element', () => {
            let len = fillTheList();
            list.remove(len - 1);
            list.remove(0);
            list.remove(0);
            expect(list.size).to.equal(len - 3);
        });
        it('expect to remove element', () => {
            let len = fillTheList();
            list.remove(len - 1);
            expect(list.size - 1).to.equal(len - 2);
        });
        it('expect to remove element', () => {
            let len = fillTheList();
            list.remove(0);
            expect(list.get(0)).to.equal(2);
            list.remove(0);
            expect(list.get(0)).to.equal(3);
        });
    });

    describe("Check get function", function () {
        it('expect get to work', () => {
            list.add(5);
            list.add(6);
            list.add(7);
            list.add(8);
            expect(list.get(0)).to.equal(5);
            expect(list.get(1)).to.equal(6);
            expect(list.get(3)).to.equal(8);
        });
        it('expect get to work', () => {
            fillTheList();
            expect(list.get(0)).to.equal(1);
        });
        it('expect get to work', () => {
            fillTheList();
            expect(list.get(list.size - 1)).to.equal(50);
        });
        it('should contains numerics only', () => {
            let size = fillTheList();
            for (let i = 0; i < size; i++) {
                expect(typeof list.get(i)).to.equal('number');
            }
        });
    });

    describe("Check add function", function () {
        it('should work with negative integers', () => {
            list.add(-5);
            list.add(-58);
            list.add(-15);
            expect(list.size).to.equal(3);
            expect(list.list.length).to.equal(3);
            expect(list.get(0)).to.equal(-58);
        });
        it('should work with float values', () => {
            list.add(2.5);
            list.add(1.13);
            list.add(0.00001);
            expect(list.size).to.equal(3);
            expect(list.list.length).to.equal(3);
            expect(list.get(0)).to.equal(0.00001);
        });
    });

    describe('Testing some edge cases', function () {
        it('should contain method add', () => {
            expect(SortedList.prototype).to.have.property('add');
        });

        it('should contain method remove', () => {
            expect(SortedList.prototype).to.have.property('remove');
        });

        it('should contain method get', () => {
            expect(SortedList.prototype).to.have.property('get');
        });

        it('should contain method size', () => {
            expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
        });

        it('should contains numerics only', () => {
            let size = fillTheList();
            for (let i = 0; i < size; i++) {
                expect(typeof list.get(i)).to.equal('number');
            }
        });

        it('should be instance of itself', () => {
            expect(list instanceof SortedList).to.be.equal(true);
        });

        it('it should hold numbers only', () => {
            list.add(5);
            list.add(50);
            list.add(500);
            expect(!list.list.some(isNaN)).to.be.equal(true);
        })
    });
});