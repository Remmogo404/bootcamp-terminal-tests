let assert = require("assert");
let greet = require("../greet");

describe('The greet function' , function(){

    it('should return "Hello, Remmogo" when I greet Remmogo' , function(){
       
    assert.equal('Hello, Remmogo', greet('Remmogo'));
    
    });

    it('should return "Hello, Pule" when I greet Pule' , function(){
       
        assert.equal('Hello, Pule', greet('Pule'));
        
        });

    it('should return "Hello" when no name is entered' , function(){
       
            assert.equal('Hello', greet());
            
            });

});