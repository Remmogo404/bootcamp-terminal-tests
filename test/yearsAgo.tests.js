let assert = require("assert");
let yearsAgo = require("../yearsAgo");


describe('yearsAgo' , function(){

    it('should return how many yearsAgo when required ' , function(){

assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));

});
});