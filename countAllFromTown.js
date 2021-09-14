module.exports = function countAllFromTown(regNum,city){
    var list = regNum.split(',');
   let count = 0;
   var fromTown = [];
   for(var i = 0; i <list.length; i++){
     var newList = list[i].trim();
     
     if(newList.includes(city)){
        count++;
      }
   }
   console.log(newList);
   return count;
 }