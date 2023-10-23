import assert from "assert";
import countAllPaarl from "../js/countAllPaarl.js";
describe('countAllPaarl', function(){
    
    it('should return the number of Paarl registration numbers',
    function(){

        assert.equal(countAllPaarl('CJ 123 208, CY 123 208'), 1);
        assert.equal(countAllPaarl('CJ 123 208, CJ 206 586WC'), 2);

    })
    it('should return 0 if there are no registration numbers from Paarl',
    function(){
        assert.equal(countAllPaarl('CY 123 208, CY 206 586WC'), 0);
    })
    it('should retun 0 for Paarl registration numbers passed in lowercase and for empty strings',
    function(){
        assert.equal(countAllPaarl('cj 123 208, cy 123 208'), 0, 'the correct format is "CJ or CY"');
        assert.equal(countAllPaarl(''), 0);
    }
   
    
    )

})