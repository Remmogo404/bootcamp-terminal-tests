module.exports = function totalPhoneBill(string){
    const itemString = string.split(',');
    let totalCost = 0;
    for(var i = 0; i <itemString.length; i++){
      const items = itemString[i].trim();
      
      if(items == 'call'){
       totalCost += 2.75;
      }else if(items == 'sms'){
         totalCost += 0.65;
        }
    }
    return 'R' + totalCost.toFixed(2);
  }