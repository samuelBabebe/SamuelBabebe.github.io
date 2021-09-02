
"use strict";
const assert = require("assert");
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


describe("isVowel", function () {
 it("a is vowel", function () {
 assert.equal(isVowel("a"), true);
 });
 it("e is vowel", function () {
 assert.equal(isVowel("e"), true);
 });
 it("i is vowel", function () {
 assert.equal(isVowel("i"), true);
 });
 it("o is vowel", function () {
 assert.equal(isVowel("o"), true);
 });
 it("u is vowel", function () {
 assert.equal(isVowel("u"), true);
 });
 it("z is not vowel", function () {
 assert.equal(isVowel("z"), false);
 });
 it("5 is not vowel", function () {
 assert.equal(isVowel("5"), false);
 });
});
/* i need to diable the eslint because it keep saying jsdoc missing 
even if i already add the jsdoc and i get it as Index.html*/