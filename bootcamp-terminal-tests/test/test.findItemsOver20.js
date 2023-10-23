import assert from "assert";
import findItemsOver20 from "../js/findItemsOver20.js";
describe('findItemsOver20', function(){

    it('should return a list of products that have a quantity that is over 20', 
    function(){
    
        var anyObjects1 = [
            {name : 'apples', qty :12 },
            {name : 'oranges', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        
        var items1 = [
            {name : 'oranges', qty : 37},
            {name : 'bananas', qty : 27},
        ];
        
        assert.deepEqual(findItemsOver20(anyObjects1), items1);
        
    
    }
    
    )
    it('should return an empty array if there are no items over 20',
    function(){
        var anyObjects2 = [
            {name : 'tablets', qty : -20},
            {name : 'pills', qty :0},
            {name : 'bananas', qty : 0},
            {name : 'apples', qty : 0},
        ]
        assert.deepEqual(findItemsOver20(anyObjects2), [], 'No items over 20');
    })

    
    }
    );
    
    
    