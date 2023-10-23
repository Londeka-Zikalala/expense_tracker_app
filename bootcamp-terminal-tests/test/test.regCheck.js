import assert from "assert";
import regCheck from "../js/regCheck.js";
describe('regCheck', function(){

    it('should return true for registration numbers from EC',
    
    function(){
        var registrationsEC = ["GP","MP","L","ND", "CY","CA"];
        assert.equal(regCheck("ERT 123 EC","EC"), true);
        assert.equal(regCheck("ERT 123 EC", registrationsEC), false);
        assert.equal(regCheck("ERT 123 ", "EC"), false ,"Not a valid number plate")
    }
    )

    it('should return true for registration numbers from GP',
    function(){
        var registrationsGP = ["EC","MP","L","ND", "CY","CA"];
        assert.equal(regCheck("ERT 123 GP","GP"), true);
        assert.equal(regCheck("ERT 123 GP", registrationsGP), false);
        assert.equal(regCheck("ERT 123 ","GP" ), false,"Not a valid number plate");
    } 

    )
    it('should return true for registration numbers from MP',
    function(){
        var registrationsMP = ["EC","GP","L","ND", "CY","CA"];
        assert.equal(regCheck("ERT 123 MP","MP"), true);
        assert.equal(regCheck("ERT 123 MP", registrationsMP), false);
        assert.equal(regCheck("ERT 123 ", "MP"), false,"Not a valid number plate");
    } 
)

it('should return true for registration numbers from L',
    function(){
        var registrationsL = ["EC","GP","MP","ND", "CY","CA"];
        assert.equal(regCheck("ERT 123 L","L"), true);
        assert.equal(regCheck("ERT 123 L", registrationsL), false);
        assert.equal(regCheck("ERT 123 ", "L"), false,"Not a valid number plate");
    } 
)

}
)