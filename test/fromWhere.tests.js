let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('fromWhere' , function(){

    it('should return the fromWhere of the regNum when reqiured ' , function(){
        
        assert.equal(fromWhere('CY'), 'Bellville');
        assert.equal(fromWhere('CJ'), 'Paarl');
        assert.equal(fromWhere('CA'), 'Cape Town');
        assert.equal(fromWhere('CC'), 'Some other place!');
        
});
});