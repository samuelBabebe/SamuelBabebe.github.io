"use strict";

/* You need the module.exports when testing in node.  
Comment it out when you send your file to the browser
*/ 
module.exports = {maxOfThree, sum, multiply,findLongestWord,
    reverseArray,reverseArrayInPlace,scoreExams,generateArray }; /*add all
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
    a >= b && a >= c ? result = a :
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
 * 
 * @param {array} arr any string value array
 * @returns {number} returns number of longest word.
 */
function findLongestWord(arr){
    let newarr = [];
    for(let i = 0; i < arr.length; i++){
        newarr[i] = arr[i].length;
    }
    newarr.sort((a,b) => a-b);
    return newarr[arr.length-1];
}

 /**
  * this function accept an array and create another array with the reverse
  * of the input
  * @param {array} arr the orginal array
  * @returns {array} newarr the reversed array
  */
function reverseArray(arr){
    let newarr = []
    let x = arr.length-1
    for(let i = 0; i < arr.length; i++){
        newarr[i] = arr[x]
        x--;
    }
    return newarr;
}
/**
 * this function accept an array and reverse its values
 * @param {array} newarr the orginal array
 * @returns {array} reversed result
 */
function reverseArrayInPlace(newarr){
    
    for(let i = 0; i<=Math.floor((newarr.length-1)/2); i++){
        let count = newarr.length-1-i;
        let swap = newarr[i];
        newarr[i] = newarr[count];
        newarr[count] = swap;
    }
    return newarr;
}

/**
 * this function accept student and correct answers in the form of array 
 * and returns array of each student score 
 * @param {array} studentAnswers the student answe
 * @param {array} correctAnswers the correct answer
 * @returns {array} returns score of each student
 */
function scoreExams(studentAnswers,correctAnswers){
    let count=0;
    let result = [];
    for(let i = 0; i < studentAnswers.length; i++){
        for(let j = 0; j <correctAnswers.length; j++){
            if(studentAnswers[i][j]===correctAnswers[j]) count++;
        }
        result[i]=count;
        count = 0;
    }
    return result;
}
/**
 * this function accept a number to generate a multidimential array
 * @param {number} x the number of index
 * @param {number} y the number of internal array inex
 * @returns {array} returns multidimentinal array
 */
function generateArray(x,y){
    let arr = [];
    let allarr = [];
    let count = 1;
    for(let i = 0; i<x; i++){
        for(let j = 0; j<y; j++){
        arr[j]=count;
        count++
        }
        allarr[i]=arr;
        arr = []
    }
    

    return allarr;
}

