module.exports = function countAllPaarl(regNum){
  var split = regNum.split(',').map(item=>item.trim());
  var count  = 0;
  for(var i=0; i< split.length; i++){
    if (split[i].startsWith('CJ')) count++;
  }
      return count;
      }