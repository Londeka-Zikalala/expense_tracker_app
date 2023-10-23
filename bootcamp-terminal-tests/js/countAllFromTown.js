export default  function countAllFromTown(registrationN,initialLetters){
    let x = 0 
    var registrations = registrationN.split(",");
      for(var i = 0; i<registrations.length; i++){
      var regN= registrations[i].trim();
        if(regN.startsWith(initialLetters)){
          x++;}
      }
    
    return x
    
    };