import assert from "assert";
import findItemsOver from "../js/findItemsOver.js";

describe('findItemsOver', function(){

    it('should return a list of products that have quantity higher than the threshold.', 
    function(){
        var anyObjects = [
            {name : 'apples', qty :12 },
            {name : 'oranges', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        var threshold = 15 

        var anyObjectsOver15= [
            {name : 'oranges', qty : 37},
            {name : 'bananas', qty : 27},
        ];


            assert.deepEqual(findItemsOver(anyObjects, threshold),anyObjectsOver15 );
          ;

    })

    it('should return an empty array if there are no items higher than the threshold',
    function(){
        var anyObjects = [
            {name : 'apples', qty :12 },
            {name : 'oranges', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        var threshold = 40
        assert.deepEqual(findItemsOver(anyObjects, threshold),[] , 'No items over 40');
    })

    it('should exclude items that are equal to the threshold',
    function(){
        var anyObjects = [
            {name : 'apples', qty :12 },
            {name : 'oranges', qty : 40},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        var threshold = 40
        assert.deepEqual(findItemsOver(anyObjects, threshold),[] , 'No items over 40');
    })
})
