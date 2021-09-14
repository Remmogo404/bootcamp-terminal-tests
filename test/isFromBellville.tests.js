let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('The is From Bellvile function' , function(){

    it('should return regCode if it is"CY" ' , function(){
       
        assert.equal(isFromBellville('CY 123'), true);

        assert.equal(isFromBellville('Cj 123'), false);
    
    });
});
