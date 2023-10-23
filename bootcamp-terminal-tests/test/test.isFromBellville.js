import assert from "assert";
import isFromBellville from "../js/isFromBellville.js";

describe("isFromBellville", function(){
    it("should return 'true' registration numbers that start with CY",
    function(){ 
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CY 123 J'), true);
        assert.equal(isFromBellville('CY'), true, 'value still starts with CY');

    }
)
it(
    'should  return "false" for registration numbers that do not start with "CY"',
    function(){
        assert.equal(isFromBellville('CJ 123'), false);
        assert.equal(isFromBellville('AB 123'), false);
        assert.equal(isFromBellville('CA'), false );
    }
)
it('should be case sensitive and return "false" for empty strings',
function(){
    assert.equal(isFromBellville('Cy 123'), false);
    assert.equal(isFromBellville('cy 123'), false);
    assert.equal(isFromBellville(''), false , 'value is Null');
}
)
    }
    )


