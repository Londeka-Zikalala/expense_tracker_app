export default  function mostProfitableDepartment(salesData){
    var departmentSalesMap = {};
    for(var i = 0; i<salesData.length;i++){
      const storeDepartments = salesData[i].department;  
      if(departmentSalesMap[storeDepartments] === undefined){
        departmentSalesMap[storeDepartments] = 0
      }
      else{ departmentSalesMap[storeDepartments] += salesData[i].sales
          }
    }
       
    var maximumSales = 0;
      var highestDepartment = "";
    
    for(let  storeDepartments  in departmentSalesMap){
    
      if(departmentSalesMap[storeDepartments]> maximumSales){
        maximumSales = departmentSalesMap[storeDepartments];
        highestDepartment = storeDepartments
      }
                }
      
      return highestDepartment
    };