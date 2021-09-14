let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('isWeekday' , function(){

    it('should return which weekday it is when required ' , function(){

assert.equal(isWeekday('Saturday'), false);
assert.equal(isWeekday('Monday'), true);

});
});

