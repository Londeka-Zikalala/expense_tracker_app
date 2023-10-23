import assert from "assert";
import fromWhere from "../js/fromWhere.js";
describe('fromWhere', function(){
    it('should return "Paarl" for registration numbers that start with "CJ", "Cape Town" for "CA" and "Bellville" for "CY"',
   function(){
    assert.equal(fromWhere('CJ 567489'), 'Paarl'); 
    assert.equal(fromWhere('CY 567489'), 'Bellville');
    assert.equal(fromWhere('CA 567489 '), 'Cape Town');
    
})
it(
    'should return "Some other place!" for registrations that do not start with "CA, CJ, CY"',
    function(){
        assert.equal(fromWhere('CB 567489'), 'Some other place!');
        assert.equal(fromWhere('AB 567489'), 'Some other place!');
        assert.equal(fromWhere('C J 567489'), 'Some other place!');
    }

)
it(
    'should return "Some other place!" for empty strings and incorrect case format',
    function(){
        assert.equal(fromWhere(''), 'Some other place!');
        assert.equal(fromWhere('cj 567489'), 'Some other place!', '"CJ" for Paarl');
        assert.equal(fromWhere('cY 567489'), 'Some other place!', '"CY" for Bellville');
    }

)
})

