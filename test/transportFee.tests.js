let assert = require("assert");
let transportFee = require("../transportFee");

describe('transportFee' , function(){

    it('should return the transportFee it is when required ' , function(){

        assert.equal(transportFee('morning'), 'R20');

        assert.equal(transportFee('afternoon'), 'R10');
        
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
        
});
});