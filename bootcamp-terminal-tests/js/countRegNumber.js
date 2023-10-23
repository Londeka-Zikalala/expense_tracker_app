export default function countRegNumber(registrations){
    if(registrations === ''){
        return 0;
    }
 var licencePlates = registrations.split(',');
     return licencePlates.length;
}
