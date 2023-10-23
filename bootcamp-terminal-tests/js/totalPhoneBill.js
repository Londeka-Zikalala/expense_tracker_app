export default  function totalPhoneBill(services){
    let sumOfServices= 0
    var eachService = services.split(", ");
      for(var i = 0; i<eachService.length;i++){
        var eaService = eachService[i]
        if(eaService === "call"){ 
          sumOfServices+= 2.75}
        else if (eaService === "sms" ){
           sumOfServices += 0.65}
        
      } 
      return "R" + sumOfServices.toFixed(2);
      
    };
       