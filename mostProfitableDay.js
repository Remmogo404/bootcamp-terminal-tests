module.exports = function mostProfitableDay(salesInfo2){
    
    const profit = {};
     for (var i= 0; i<salesInfo2.length; i++){
      const prod1 = salesInfo2[i];
       profit[prod1.day] =0;
     }
     for (var i= 0; i<salesInfo2.length; i++){
      const prod1 = salesInfo2[i];
     
       var currentDay = profit[prod1.day];
       currentDay += prod1.sales;
       profit[prod1.day] = currentDay;
     }
    
    var currentSales = 0;
    var currentDay = '';
    for(const daySales in profit){
      const currentDaySales = profit[daySales];
      if(currentDaySales > currentSales){
        currentSales = currentDaySales;
        currentDay = daySales;
      }
    }
    return currentDay;
  }