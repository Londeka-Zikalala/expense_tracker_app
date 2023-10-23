import assert from "assert";
import transportFee from "../js/transportFee.js";
describe('transportFee', function(){
    it('should return the transport fare for working shifts',
    function(){
       assert.equal(transportFee('morning'), 'R20');
       assert.equal(transportFee('afternoon'),'R10');
       assert.equal(transportFee('night'), 'free');
    })
    it(
        'should be case sensitive and return "free" for incorrect format',
        function(){
     
            assert.equal(transportFee('NIGHT'), 'free', "correct value is 'night'");
        }
    )
    it(
        'should be case sensitive and return "free" for empty strings',
        function(){
     
            assert.equal(transportFee(''), 'free', "empty string");
        }
    )
})