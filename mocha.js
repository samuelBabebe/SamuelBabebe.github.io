"use strict";

const functionmodule = ("./sam.js")
const sumdigts = functionmodule.sumdigts;
const assert = require("assert");

describe("this function accept integer and add them", function(){
    it("add 1234", function(){
        assert.strictEqual(sumdigts(1234),10);
    });
    it("add 105", function(){
        assert.strictEqual(sumdigts(105),6);
    });
    it("add 8", function(){
        assert.strictEqual(sumdigts(8),8);
    });
});

