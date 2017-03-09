/// <reference path="../node_modules/@types/node/index.d.ts"/>
/// <reference path="../node_modules/@types/mocha/index.d.ts"/>
const assert = require("assert");


import {stemmer} from "../src/index";

describe("Stemmer",function(){
    it("talkative",function(){
        assert.equal(stemmer("talkative"),"talk");
    });
    it("calculator",function(){
        assert.equal(stemmer("calculator"),"calcul");
    });
    it("frightful",function(){
        assert.equal(stemmer("frightful"),"fright");
    });
    it("slothful",function(){
        assert.equal(stemmer("slothful"),"sloth");
    });
    it("diacritical",function(){
        assert.equal(stemmer("diacritical"),"diacrit");
    });
    it("empirical",function(){
        assert.equal(stemmer("empirical"),"empir");
    });
    it("elemental",function(){
        assert.equal(stemmer("elemental"),"element");
    });
    it("smiling",function(){
        assert.equal(stemmer("smiling"),"smile");
    });
    it("predominate",function(){
        assert.equal(stemmer("predominate"),"predomin");
    });
    it("annotate",function(){
        assert.equal(stemmer("annotate"),"annot");
    });
});