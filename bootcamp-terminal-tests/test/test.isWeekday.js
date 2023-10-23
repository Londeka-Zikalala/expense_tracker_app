import assert from "assert";
import isWeekday from "../js/isWeekday.js";
describe('isWeekday', function () {
    
    it('should return true for weekdays',
        function () {
            assert.equal(isWeekday('Monday'), true);
            assert.equal(isWeekday('Tuesday'), true);
            assert.equal(isWeekday('Wednesday'), true);
            assert.equal(isWeekday('Thursday'), true)
            assert.equal(isWeekday('Friday'), true)
            
            
            
})
it('should return false for weekends',
function(){
    assert.equal(isWeekday('Saturday'), false, "This is a Weekend");
    assert.equal(isWeekday('Sunday'), false, 'This is a Weekend');

}
)

it(
    'should be case sensitive and return false for strings that are not days of the week',
    function () {
        assert.equal(isWeekday('march'), false);
        assert.equal(isWeekday(''), false);
        assert.equal(isWeekday('Summer'), false);
    }
)
    
}
    )