"use strict"

//module.exports = {finding,ucFirst,checkSpam,getMaxSubSum,camelize}
/**
 * 
 * @param {array} arr input array
 * @returns {array} returns array of numbers
 */
function finding(arr){
    let newar = []
    arr.find(item =>{if(Number(item)){  newar.push(item)}})
    return newar;
}
/**
 * 
 * @param {string} input string
 * @returns {string} returns string with first letter upper case
 */
function UcFirst(input){
    input.toUpperCase();
    return input
}
/**
 * 
 * @param {string} input 
 * @returns {string} returns the string with upercase of the first letter
 */
function ucFirst(input){
    let result;
    //input === "" ? result = "" : result = sam + bubu;
   if(input ===""){
       result = "";
   }else{
   let sam =input[0].toUpperCase();
   let bubu = input.slice(1,input.length)
   result = sam +bubu; 
   }
   
   return result;
}


/**
 * 
 * @param {string} input 
 * @returns {boolean} return a boolean
 */
function checkSpam(input){
    if(input.includes("ViAgRA") || input.includes("xxxxx")){
        return true
    }else{
        return false
    }
    
}

/**
 * 
 * @param {array} arr input array
 * @returns {number} returns the maxsubsum of the array
 */
function getMaxSubSum(arr){
    let max_so_far = Number.NEGATIVE_INFINITY;
    let len = arr.length;

    for (var i = 0; i < len; i++) {
        let maxSum = 0;

        for (var j = i; j < len; j++) {
            maxSum += arr[j];

            if (max_so_far < maxSum) {
               // leftIndex = i;
                max_so_far = maxSum;
                //rightIndex = j;
            }
        }
    }
    if(max_so_far ===-Infinity ||  max_so_far<=0){
        max_so_far = 0;
    }
    return max_so_far;
    
}
/**
 * 
 * @param {string} input any word with slash on it
 * @returns {string} returns excluding the slash
 */
function camelize(input){
    let result = "";
    let sam = input.split("");
   let lol = sam.filter(item => {if(item!="-"){return item;}})
   for(let items of lol){
    result+=items;
   }
   return result;
   
}
//console.log(finding( array));