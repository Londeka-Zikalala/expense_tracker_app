import assert from "assert";
import yearsAgo from "../js/yearsAgo.js";
describe('yearsAgo', function(){
    it('should return the difference of current year and any previous year',
    function(){
    assert.equal(yearsAgo(1999), 24);
    assert.equal(yearsAgo(2010), 13);
    }
    )
    it(
        'should return 0 for the current year',
        function(){
        assert.equal(yearsAgo(2023),0);
    }
    )
    it('should return a negative value for future years',
    function(){
        assert.equal(yearsAgo('2024'), -1, 'This is a future year'); 

    }

    )
}
)
