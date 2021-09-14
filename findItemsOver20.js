module.exports = function findItemsOver20(itemList){
  
    const list = [];
  for(var i = 0; i<itemList.length; i++){
    if(itemList[i].qty>20)
      list.push(itemList[i])
  }
  console.log(list);
  return list;
}

module.exports = function findItemsOver(itemList, listItem){
  const list1 = [];
 for(var i in itemList){
   if(itemList[i].qty>listItem)
     list1.push(itemList[i])
 }
  console.log(list1);
  return list1
}