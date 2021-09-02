"use strict";

/**
 * this function accept any integer number and add them.
 * @param {number} input the number to add them.
 * @returns {number} the sum of numbers
 */
function sumdigts(input){
    let sum = 0;
    while(input){
        sum+=input %10;
        input = Math.floor(input/ 10);
    }
    return sum;
}

const assert = require("assert");

describe("this function accept integer and add them", function(){
    it("add 1234", function(){
        assert.strictEqual(sumdigts(1234),10);
    });
    it("add 105", function(){
        assert.strictEqual(sumdigts(105),6);
    });
    it("add 8", function(){
        assert.strictEqual(sumdigts(8),8);
    });
});
