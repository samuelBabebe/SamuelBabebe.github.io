"use strict";
/**
 * this function calculate the down payment of house based on its 
 * cost.
 * @param {number} housecost the cost of house. 
 * @returns {number} it returns the down payment.
 */


function calcDownpayment(housecost){
    let downpayment;
    housecost<50000 ? downpayment = 0.05*housecost :
    housecost>=50000 && housecost<100000 ? downpayment =
     2500 + 0.1*(housecost-50000) :
    housecost>=100000 && housecost<=200000 ? downpayment =
     7500 + 0.15 *(housecost - 100000) :
     downpayment = 5000 + 0.1 *(housecost -200000);
     return downpayment;
}
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




