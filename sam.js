"use strict";
module.exports = {sumdigts};
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






