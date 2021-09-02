"use strict";
module.exports = {computeSalesCommission};
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





