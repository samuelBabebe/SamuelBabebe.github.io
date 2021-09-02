"use strict";

const functionmodule = require("./sam.js");
const multidigts = functionmodule.multidigts;
const assert = require("assert");

describe("this function accept integer and multiply them", function(){
    it("multiply 1234", function(){
        assert.strictEqual(multidigts(1234),24);
    });
    it("multiply 105", function(){
        assert.strictEqual(multidigts(105),0);
    });
    it("multiply 8", function(){
        assert.strictEqual(multidigts(8),8);
    });
});

