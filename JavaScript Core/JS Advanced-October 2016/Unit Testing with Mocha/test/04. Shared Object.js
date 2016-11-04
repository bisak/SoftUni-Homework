let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');


let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

document.body.innerHTML =
    `<div id="wrapper">
                <input type="text" id="name">
                <input type="text" id="income">
            </div>`;

describe("sharedObject", function () {
    describe("name", function () {
        it('name property should start as null', function () {
            expect(sharedObject.name).to.equal(null);
        });
    });
    describe("income", function () {
        it('income property should start as null', function () {
            expect(sharedObject.income).to.equal(null);
        });
    });
    describe("changeName", function () {
        it('changeName() should do nothing with ("")', function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.equal(null);
        });
        it('changeName() should do nothing with ("") 2', function () {
            sharedObject.name = 'pesho';
            sharedObject.changeName('');
            expect(sharedObject.name).to.equal('pesho');
        });
        it('property name should become 69', function () {
            sharedObject.changeName('69');
            expect(sharedObject.name).to.equal("69");
            expect(sharedObject.name).to.equal($('#name').val());
        });
        it('property name should become .', function () {
            sharedObject.changeName('.');
            expect(sharedObject.name).to.equal(".");
            expect(sharedObject.name).to.equal($('#name').val());
        });
        it('property name should become GOSHO ', function () {
            sharedObject.name = 'PESHO';
            sharedObject.changeName('GOSHO');
            expect(sharedObject.name).to.equal("GOSHO");
            expect(sharedObject.name).to.equal($('#name').val());
        });
    });
    describe("changeIncome", function () {
        it('income property should remain the same with negative values', function () {
            expect(sharedObject.income).to.equal(null);
        });
        it('income property should remain the same with negative values', function () {
            sharedObject.changeIncome("PESHO");
            expect(sharedObject.income).to.equal(null);
        });
        it('income property should remain the same with negative values', function () {
            sharedObject.changeIncome(".");
            expect(sharedObject.income).to.equal(null);
        });
        it('income property should remain the same with negative values', function () {
            sharedObject.changeIncome("2.2");
            expect(sharedObject.income).to.equal(null);
        });
        it('income property should remain the same with negative values', function () {
            sharedObject.changeIncome("-2.2");
            expect(sharedObject.income).to.equal(null);
        });
        it('income property should remain the same with negative values', function () {
            sharedObject.changeIncome("");
            expect(sharedObject.income).to.equal(null);
        });
        it('income property should remain the same with negative values 2', function () {
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.equal(null);
        });
        it('income property should become 1 with changeIncome 1', function () {
            sharedObject.changeIncome(1);
            expect(sharedObject.income).to.equal(1);
            expect(sharedObject.income).to.equal(Number($('#income').val()));
        });
        it('income property should become 1 with changeIncome 1', function () {
            sharedObject.changeIncome(69);
            expect(sharedObject.income).to.equal(69);
            expect(sharedObject.income).to.equal(Number($('#income').val()));
        });
    });
    describe("updateName", function () {
        it('name property should remain the same with ""', function () {
            $('#name').val('');
            sharedObject.name = null;
            sharedObject.updateName();
            expect(sharedObject.name).to.equal(null);
        });
        it('name property should remain the same with "" 2', function () {
            $('#name').val('');
            sharedObject.name = 'KIRO';
            sharedObject.updateName();
            expect(sharedObject.name).to.equal("KIRO");
        });
        it('name property should become GOSHO', function () {
            $('#name').val('GOSHO');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal($('#name').val());
        });
        it('name property should become 2', function () {
            $('#name').val('2');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('2');
            expect(sharedObject.name).to.equal($('#name').val());
        });
        it('name property should become -2', function () {
            $('#name').val('-2');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('-2');
            expect(sharedObject.name).to.equal($('#name').val());
        });
    });
    describe("updateIncome", function () {
        it('income property should remain the same with ""', function () {
            $('#income').val('');
            sharedObject.income = null;
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(null);
        });
        it('income property should remain the same with ""', function () {
            $('#income').val("-25");
            sharedObject.income = null;
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(null);
        });
        it('income property should remain the same with ""', function () {
            $('#income').val("25");
            sharedObject.income = null;
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(25);
        });
        it('income property should remain the same with ""', function () {
            $('#income').val("2.5");
            sharedObject.income = null;
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(null);
        });
        it('income property should remain the same with ""', function () {
            $('#income').val("-2.5");
            sharedObject.income = null;
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(null);
        });
    });
});