"use strict"
/*const assert = require("assert");
const inport = require("./dataTypes.js");
const finding = inport.finding;
const ucFirst = inport.ucFirst;
const checkSpam = inport.checkSpam;
const camelize = inport.camelize;
const getMaxSubSum = inport.getMaxSubSum;
*/
   
describe("finds number on the array",function(){
    const arr =  ["abc","123a", "ab123", "123.3", "123"]
    it("array is arr",function(){
        assert.deepStrictEqual(finding(arr),["123.3", "123"])
    });
});

describe("ucFirst", function() {
    it('Uppercases the first symbol', function() {
      assert.strictEqual(ucFirst("john"), "John");
    });
  
    it("Doesn't die on an empty string", function() {
      assert.strictEqual(ucFirst(""), "");
    });
  });

  describe("checkSpam", function() {
    it('finds spam in "buy ViAgRA now"', function() {
      assert.strictEqual(checkSpam('buy ViAgRA now'), true);
    });
  
    it('finds spam in "free xxxxx"', function() {
      assert.strictEqual(checkSpam('free xxxxx'), true);
    });
  
    it('no spam in "innocent rabbit"', function() {
      assert.strictEqual(checkSpam('innocent rabbit'), false);
    });
  });

  describe("getMaxSubSum", function() {
    it("maximal subsum of [1, 2, 3] equals 6", function() {
      assert.equal(getMaxSubSum([1, 2, 3]), 6);
    });
  
    it("maximal subsum of [-1, 2, 3, -9] equals 5", function() {
      assert.equal(getMaxSubSum([-1, 2, 3, -9]), 5);
    });
  
    it("maximal subsum of [-1, 2, 3, -9, 11] equals 11", function() {
      assert.equal(getMaxSubSum([-1, 2, 3, -9, 11]), 11);
    });
  
    it("maximal subsum of [-2, -1, 1, 2] equals 3", function() {
      assert.equal(getMaxSubSum([-2, -1, 1, 2]), 3);
    });
  
    it("maximal subsum of [100, -9, 2, -3, 5] equals 100", function() {
      assert.equal(getMaxSubSum([100, -9, 2, -3, 5]), 100);
    });
  
    it("maximal subsum of [] equals 0", function() {
      assert.equal(getMaxSubSum([]), 0);
    });
  
    it("maximal subsum of [-1] equals 0", function() {
      assert.equal(getMaxSubSum([-1]), 0);
    });
  
    it("maximal subsum of [-1, -2] equals 0", function() {
      assert.equal(getMaxSubSum([-1, -2]), 0);
    });
  
    it("maximal subsum of [2, -8, 5, -1, 2, -3, 2] equals 6", function() {
      assert.equal(getMaxSubSum([2, -8, 5, -1, 2, -3, 2]), 6);
    });
  });

  describe("camelize", function() {

    it("leaves an empty line as is", function() {
      assert.equal(camelize(""), "");
    });
  
    it("turns background-color into backgroundColor", function() {
      assert.equal(camelize("background-color"), "backgroundcolor");
    });
  
    it("turns list-style-image into listStyleImage", function() {
      assert.equal(camelize("list-style-image"), "liststyleimage");
    });
  
    it("turns -webkit-transition into WebkitTransition", function() {
      assert.equal(camelize("-webkit-transition"), "webkittransition");
    });
  
  });