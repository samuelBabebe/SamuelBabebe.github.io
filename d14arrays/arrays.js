"use strict";

/* You need the module.exports when testing in node.  
Comment it out when you send your file to the browser
*/ 
module.exports = {maxOfThree, sum, multiply }; /*add all
 of your function names here that you need for the node mocha tests*/

/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c){ 
    let result;
    a > b && a > c ? result = a :
    b > a && b > c ? result = b : result = c;
    return result;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr){
    let tot = 0;
    for (const number of arr){
        tot += number;
    }
    return tot;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr){
    let tot = 1;
    for(const number of arr){
        tot*=number;
    }

    return tot;

}
/**
 * this function will compare two values and retern 1,0 or -1
 * @param {number} a the first value
 * @param {number} b the second value
 * @returns {number} returns 1,0 or -1
 */
function compare(a,b){
    let result;
    a > b ? result = 1 :
    a == b ? result = 0 : result = -1;
    
}
/**
 * 
 * @param {array} arr any string value array
 * @returns {number} returns number of longest word.
 */
function findLongestWord(arr){
    let newarr = [];
    for(let i = 0; i < arr.length; i++){
        newarr[i] = arr[i].length;
    }
    newarr.sort(compare())
    console.log(newarr[arr.length-1]);
}

