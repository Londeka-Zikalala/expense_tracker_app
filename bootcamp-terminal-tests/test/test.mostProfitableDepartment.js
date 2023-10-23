import assert from "assert";
import mostProfitableDepartment from "../js/mostProfitableDepartemnt.js";
describe('mostProfitableStoreDepartment', function(){

    it('should return a string that is the department with the highest sales', 
    function(){
        var salesData = [
            {department : 'hardware', sales : 4500, day : 'Monday'},
            {department : 'outdoor', sales : 1500, day : 'Monday'},
            {department : 'carpentry', sales : 5500, day : 'Monday'},
            {department : 'hardware', sales : 7500, day : 'Tuesday'},
            {department : 'outdoor', sales : 2505, day : 'Tuesday'},
            {department : 'carpentry', sales : 1540, day : 'Tuesday'},
            {department : 'hardware', sales : 1500, day : 'Wednesday'},
            {department : 'outdoor', sales : 8507, day : 'Wednesday'},
            {department : 'carpentry', sales : 8009, day : 'Wednesday'},
            {department : 'hardware', sales : 12000, day : 'Thursday'},
            {department : 'outdoor', sales : 18007, day : 'Thursday'},
            {department : 'carpentry', sales : 6109, day : 'Thursday'},
            {department : 'hardware', sales : 7005, day : 'Friday'},
            {department : 'outdoor', sales : 12006, day : 'Friday'},
            {department : 'carpentry', sales : 16109, day : 'Friday'},
        ];
        
        var salesData2 = [
            {department : 'electronics', sales : 4500, day : 'Monday'},
            {department : 'outdoor', sales : 1500, day : 'Monday'},
            {department : 'carpentry', sales : 5500, day : 'Monday'},
            {department : 'steelwork', sales : 7500, day : 'Tuesday'},
            {department : 'outdoor', sales : 2505, day : 'Tuesday'},
            {department : 'carpentry', sales : 1540, day : 'Tuesday'},
            {department : 'hardware', sales : 1500, day : 'Wednesday'},
            {department : 'outdoor', sales : 8507, day : 'Wednesday'},
            {department : 'carpentry', sales : 8009, day : 'Wednesday'},
            {department : 'hardware', sales : 12000, day : 'Thursday'},
            {department : 'carpentry', sales : 6109, day : 'Thursday'},
            {department : 'hardware', sales : 7005, day : 'Friday'},
            {department : 'electronics', sales : 12006, day : 'Friday'},
            {department : 'electronics', sales : 16109, day : 'Saturday'},
            {department : 'steelwork', sales : 7500, day : 'Tuesday'},
            {department : 'outdoor', sales : 2505, day : 'Tuesday'},
            {department : 'carpentry', sales : 1540, day : 'Tuesday'},
            {department : 'steelwork', sales : 1500, day : 'Wednesday'},
            {department : 'carpentry', sales : 8009, day : 'Wednesday'},
        ];
        assert.deepEqual(mostProfitableDepartment(salesData), 'outdoor');
        assert.deepEqual(mostProfitableDepartment(salesData2), 'electronics');
    
    });

    it('should return the first department if all the departments have the same sale values',
    function(){
        var someSalesData2 = [
            {department : 'electronics', sales : 12000, day : 'Friday'},
            {department : 'electronics', sales : 12000, day : 'Saturday'},
            {department : 'outdoor', sales : 12000, day : 'Tuesday'},
            {department : 'outdoor', sales : 12000, day : 'Monday'},
            {department : 'carpentry', sales : 12000, day : 'Tuesday'},
            {department : 'carpentry', sales : 12000, day : 'Wednesday'},

        ];
    
        
        assert.equal(mostProfitableDepartment(someSalesData2), 'electronics');
    })

    it('should return an empty string if the data is empty', 
    function(){
        assert.deepEqual(mostProfitableDepartment([]), '')
    }
    
    );
})