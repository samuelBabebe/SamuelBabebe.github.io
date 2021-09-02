"use strict";
module.exports = {multidigts};
/**
 * this function accept any integer number and multiply them.
 * @param {number} input the number to multiply them.
 * @returns {number} the multiplication of numbers
 */

 function multidigts(input){
    let multi = 1;
    while(input){
        multi*= input%10;
        input = Math.floor(input/10);
    }
    return multi;
}







