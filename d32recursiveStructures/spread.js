"use strict"
//module.exports = {copyArray,concat,findMin,combineObjs}
/**
 * 
 * @param {array} oldArr input array
 * @returns {array} returnns copy of array
 */
function copyArray(oldArr){
    return [...oldArr]
}

/**
 * 
 * @param {array} x input array
 * @param {array} y another array to contacnet wit the first one
 * @returns {array} concatineded array
 */
function concat(x,y){
    return [...x,...y]
}
/**
 * 
 * @param {number} input accept the first number of an array
 * @param  {array} rest the rest of array
 * @returns {number} the minimum number
 */
function findMin(input,...rest){
    rest.push(input);
    let result = rest.sort((a,b) => a-b)
    return result[0]
    
}

function combineObjs(x,y){

    return {...x,...y}
}