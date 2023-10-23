export default   function countAllPaarl(registrationN){
    let count = 0 ;
  var registrations = registrationN.split(", "); 
  
    for(var i = 0; i<registrations.length;i++){
      var regN = registrations[i];
      if(regN.startsWith("CJ")){
       count++;}
    
   }
  return count};
  