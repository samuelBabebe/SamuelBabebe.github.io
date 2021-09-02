"use strict";
const functionmodule = require("./learn.js");
const computeSalesCommission = functionmodule.computeSalesCommission;
const assert = require("assert");
describe("test of ComputSalesCommission", function(){
    it("tests salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 3500), 70);
    });
    it("tests not salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 3500), 105);
    });
   });
describe("this function tests ComputSalesCommission", function(){
    it("tests salaried and 400 sales",function(){
    assert.strictEqual(computeSalesCommission(true,400),4);
       });
    it("tests not salried and 200 sales",function(){
    assert.strictEqual(computeSalesCommission(false,200),0);
       });
   });
   