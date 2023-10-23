export default  function findItemsOver20(anyObjects){
    var itemsOver20 = [];
    for(var i = 0; i<anyObjects.length; i++){
      var itemQuantity = anyObjects[i].qty
  if(itemQuantity > 20){
    itemsOver20.push(anyObjects[i])}
  }
    return itemsOver20
  };