"use strict"
const functionmodule = require("./sam.js")
const calcDownpayment = functionmodule.calcDownpayment;
const assert = require("assert");
describe("cheak the house price and",function(){
    it(" tests house cost is 40000", function(){
        assert.strictEqual(calcDownpayment(40000), 2000);
    });
    it(" tests house cost is 50000", function(){
        assert.strictEqual(calcDownpayment(50000), 2500);
    });
    it(" tests house cost is 100000", function(){
        assert.strictEqual(calcDownpayment(100000), 7500);
    });
    it(" tests house cost is 200000", function(){
        assert.strictEqual(calcDownpayment(200000), 22500);
    });
    
});