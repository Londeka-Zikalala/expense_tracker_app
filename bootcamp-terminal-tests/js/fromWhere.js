export default function fromWhere(registrationN){
    if(registrationN.startsWith("CY")){
      return "Bellville"}
      else if(registrationN.startsWith("CJ")){
    return "Paarl"}
      else if(registrationN.startsWith("CA")){
    return "Cape Town"}
      else {return "Some other place!";}
      }