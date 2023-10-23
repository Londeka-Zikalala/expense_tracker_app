import assert from "assert";
import countAllFromTown from "../js/countAllFromTown.js";
describe('countAllFromTown', function(){
    
    it('should return the number of registrations from any given town',
    function(){

        var Paarl = countAllFromTown('CJ 123 546 , CY 345 532M , CY 234 109', 'CY')
        assert.equal(Paarl, 2);
        assert.equal(countAllFromTown('CJ 123 546 , CY 345 532M , CJ 234 109', 'CJ'), Paarl);
        var Bellville = countAllFromTown('CY 123 546', 'CY');
        assert.equal(Bellville, 1)
    }
    )
    it('should be case sensitive and return 0 for incorrect case format',
    function(){
        assert.equal(countAllFromTown('cy 123 456','CY'), 0, 'Bellville starts with "CY"')
    
    }

    )
    it('should return 0 for empty strings',
    function(){
        assert.equal(countAllFromTown('','CY'), 0)
    
    }

    )





})