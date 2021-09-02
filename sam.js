"use strict";

/**
 * this function accept if the sales man paid or not and the sales amount then returs
 * the commision he used to paid.
 * @param {Boolean} paid asks if sales person get paid or not.
 * @param {number} salesAmount the amount person sales.
 * @returns {number} return commision amount.
 */
function computeSalesCommission(paid,salesAmount){
    let commision;
    if(paid){
        salesAmount<300 ? commision=0:
        salesAmount>=300 && salesAmount <500 ? commision = 0.01*salesAmount:
        salesAmount>=500 ? commision = 0.02*salesAmount: null;
    }else{
        salesAmount>=300 && salesAmount<500 ? commision = 0.02*salesAmount:
        salesAmount>=500 ? commision = 0.03 *salesAmount: commision=0;
    }
    return commision;

}


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





