
"use strict";
module.exports = {isVowel}
/*eslint-disable*/
/* global assert isVowel*/
/* isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false
otherwise. */

/**
 * this function will accept a letter and decide if it
 * is vowel or not
 * 
 * @param {string} input the letter
 * @returns {Boolean} the output
 */


function isVowel(input){
    
    let vowel = ["a","i","e","o","u"];
    for(let i = 0; i < vowel.length; i++){
        if(input ===vowel[i]){
            return true;
        }
       
    }
    return false;
}



