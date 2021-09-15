"use strict"
//module.exports = {sum,factorial,fibonachi}
 //let count =0;
 /**
  * 
  * @param {number} number the input number
  * @returns {number} the result of sum of all number less than 
  * the input number
  */
function sum(number){

    if (number===0){
        return 0
    }else{
        //count++
        return  number + sum(number-1)
    }
}
console.log(sum(5));

/**
 * 
 * @param {number} number the input number
 * @returns {number} returns the multtiplication of each number 
 * less than the input number
 */

function factorial(number){

    if(number===0){
        return 1
    }else{
        return number * factorial(number-1)
    }
}
console.log(factorial(4));

/*function Fibonacci(number){ if we use recursion like this our output speed will be so
    slow becouse it calls a function redendently so its beter to use the old method.

    if(number <=1){
        return number
    }else{
        return Fibonacci(number-1) + fibonachi(number-2)
    }
}
*/
/**
 * 
 * @param {number} n number of fibonachi serieus
 * @returns {number} the nth of febonachi serious
 */
function fibonachi(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

