"use strict"
/*
const assert = require("assert");
const inport = require("./methods");
const filterRange = inport.filterRange;
const filterRangeInPlace = inport.filterRangeInPlace;
const unique = inport.unique;
const calculator = inport.calculator;
*/
describe("filterRange", function () {
    it("returns the filtered values", function () {
        let arr = [5, 3, 8, 1];
        let filtered = filterRange(arr, 1, 4);
        assert.deepEqual(filtered, [3, 1]);
    });

    it("doesn't change the array", function () {
        let arr = [5, 3, 8, 1];
        let filtered = filterRange(arr, 1, 4);
        assert.deepEqual(arr, [5, 3, 8, 1]); 
    });
});
describe("filterRangeInPlace", function () {
    it("returns the filtered values", function () {
        let arr = [5, 3, 8, 1];
        filterRangeInPlace(arr, 1,4 );
        assert.deepEqual( arr, [3, 1]);
    });

    it("doesn't return anything", function () {
        assert.equal(filterRangeInPlace([1, 2, 3], 1, 4), undefined);
    });
});
describe("Calculator", function () {
    //let calculator;

    //before(function () {
       // calculator = new Calculator();
    //});

    it("calculate(12 + 34) = 46", function () {
        assert.equal(calculator.calculate("12 + 34"), 46);
    });

    it("calculate(34 - 12) = 22", function () {
        assert.equal(calculator.calculate("34 - 12"), 22);
    });

    it("add multiplication: calculate(2 * 3) = 6", function () {
        //calculator.addMethod("*", (a, b) => a * b);
        assert.equal(calculator.calculate("2 * 3"), 6);
    });

    it("add power: calculate(2 ** 3) = 8", function () {
        //calculator.addMethod("**", (a, b) => a ** b);
        assert.equal(calculator.calculate("2 ** 3"), 8);
    });
});
describe("unique", function () {
    let strings = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"];
    it("tests unique hare krishnas", function () {
        assert.deepEqual(unique(strings), ["Hare", "Krishna", ":-O"]);
    });
});