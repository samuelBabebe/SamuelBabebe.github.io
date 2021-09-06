"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
module.exports = {double, times100, myMap,times10,doubles }; //add all of your function names here that you need for the node mocha tests

/**
 *@param {number} input the number to be doubled
 * @returns {number} double the input
 */
function double(input){
    return input * 2;
}


/**
 * @param {number} input the number to be multiplied
 * @returns {number} 100 times the input
 */
 function times100(input){
     return input * 100;
 }

/**
 * this function multiply its input by 100
 * @param {number} the alue of each index
 */
 let sum ="";
 function times10(item){
     
      item*= 100;
      sum+=item+ ",";
     
  }
  /**
   * 
   * @param {number} item the value of each index
   */
  function doubles(item){
     item * 2;
     sum+=item + ","
}
  
/**
 * 
 * @param {array} arr the input array
 * @param {function double or times100(item) { multiply each item of a given
 * array by two(with double function) or by 100(by times100 func)
     
 }} func 
 * @returns {array} the new array.
 */
 function myMap(arr,func){
    // let sum = "";
     arr.forEach(func);
     
     let newarr = sum.split(",");
     newarr.pop();
     for(let i = 0; i< newarr.length; i++){
         newarr[i]= parseInt(newarr[i]);
     }
 
     return newarr;
    
 }
 /**
  * this function uses function expressions
  * @param {array} arr input value
  * @returns {array} return new array
  */
 function myMap(arr){
    //let sum = "";
    arr.forEach(function(item){item*=3;sum+=item + ","});
    
    let newarr = sum.split(",");
    newarr.pop();
    for(let i = 0; i< newarr.length; i++){
        newarr[i]= parseInt(newarr[i]);
    }

    return newarr;
   
}
/**
 * this function uses arrow functions
 * @param {array} arr input value
 * @returns {array} returns new array
 */
function myMap(arr){
    //let sum = "";
    arr.forEach(item => {item*=3;sum+=item + ","});
    
    let newarr = sum.split(",");
    newarr.pop();
    for(let i = 0; i< newarr.length; i++){
        newarr[i]= parseInt(newarr[i]);
    }

    return newarr;
   
}


