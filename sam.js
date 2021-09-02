"use strict";
module.exports = {calcDownpayment};
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






