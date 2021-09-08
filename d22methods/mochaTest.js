"use strict"
/*const assert = require("assert");
const inport = require("./calc.js");
const calculator = inport.calculator;
const calc = inport.calc;
const accumulator = inport.accumulator;
const bank = inport.bank;
*/
describe("calculator", function() {
    /*let calculator;
    before(function() {
    calculator = new Calculator();
    calculator.setValues(2, 3);
    });*/
    it("when 2 and 3 are entered, the sum is 5", function() {
    assert.equal(calculator.sum(), 5);
    });
    it("when 2 and 3 are entered, the product is 6", function() {
    assert.equal(calculator.mul(), 6);
    });
    });

    describe("calculator from constructor function", function () {
        /*let calc;  
        before(function () {
            calc = new Calculator();
            calc.setValues(20, 30);
        });*/
    
        it("when 20 and 30 are entered, the sum is 50", function () {
            assert.strictEqual(calc.a, 20);
            assert.strictEqual(calc.b, 30);
            assert.strictEqual(calc.sum(), 50);
        });
    
        it("when 20 and 30 are entered, the product is 600", function () {
            assert.strictEqual(calc.a, 20);
            assert.strictEqual(calc.b, 30);
            assert.strictEqual(calc.mul(), 600);
        });
    });

    describe("accumulator", function () {


        it("checks initialValue and increment", function () {
            //const accumulator = new Accumulator(5, 10);
            assert.strictEqual(accumulator.currentValue, 5);
            assert.strictEqual(accumulator.increment, 10);
        });
    
        it("checks accumulate", function () {
            //const accumulator = new Accumulator(5, 10);
            accumulator.accumulate();
            accumulator.accumulate();
            assert.strictEqual(accumulator.currentValue, 25);
            assert.strictEqual(accumulator.increment, 10);
        });    
    
        it("checks report", function () {
            //const accumulator = new Accumulator(5, 10);
            assert.strictEqual(accumulator.report(), 15);
        });    
    
    });

    describe("bank tests", function () {

        it("checks initial balance", function () {
            assert.strictEqual(bank.bankBalance(), 85);
        });
    
        /* the credit and debit are made in the bank.js file */
        it("balance after credit of 20 and debit of 1000 for customer 1", function () {
            assert.strictEqual(bank.bankBalance(), 85);
            bank.credit(1, 20);
            bank.debit(1, 1000);
            assert.strictEqual(bank.bankBalance(), 1105);
        });
    
    });