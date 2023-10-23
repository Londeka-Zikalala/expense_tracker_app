import assert from "assert";
import totalPhoneBill from "../js/totalPhoneBill.js";
describe('totalPhoneBill', function(){
    it('should return the total cost of cell services',
    function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45' );
        assert.equal(totalPhoneBill('call'), 'R2.75');
        assert.equal(totalPhoneBill('sms'),'R0.65');

    })
    it(
        'should be case sensitive and return R0.00 for services not listed in the correct format',
        function(){
            assert.equal(totalPhoneBill('SmS'),'R0.00');
            assert.equal(totalPhoneBill('sms, SMS'),'R0.65');
        }
    )
    it(
        'should "R0.00" for empty strings ',
        function(){
            assert.equal(totalPhoneBill(''),'R0.00');
        })
})