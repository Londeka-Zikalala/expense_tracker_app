import assert from "assert";
import countRegNumber from "../js/countRegNumber.js";
describe('countRegNumber', function(){
    it('should return the correct number of registrations in a string',
    function(){

        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
        assert.equal(countRegNumber('CA 182736'), 1);
        assert.equal(countRegNumber('CA 123, ca 4576 J'),2);
    }

    )

    it('should return 0 for empty strings',
    function(){
        assert.equal(countRegNumber(''), 0);
        
    }
    )

    it('should not be case sensitive and return a number value for any string type',
    function(){
        assert.equal(countRegNumber('ca 182736,Cy 523519,cj 812328'), 3)
        assert.equal(countRegNumber('182736'), 1)

    }
    )

}
)