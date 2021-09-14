module.exports = function  mostProfitableDepartment(salesInfo1){
  
    const departList = {};
    for (var i= 0; i<salesInfo1.length; i++){
      const prod = salesInfo1[i];
      departList[prod.department] = 0;
    }
    
    for (var i= 0; i<salesInfo1.length; i++){
      const prod = salesInfo1[i];
     var dept = departList[prod.department];
      dept += prod.sales;
      departList[prod.department] = dept
    }
    
    var currentSales = 0;
    var currentDept ='';
    for (const deptSales in departList){
      const currentDepartSales = departList[deptSales];
      if (currentDepartSales > currentSales){
        currentSales = currentDepartSales;
        currentDept = deptSales;
      }
    }
    return currentDept;
  }
  
 