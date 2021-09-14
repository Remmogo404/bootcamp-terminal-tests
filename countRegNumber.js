module.exports = function countRegNumber (regCount){
  
    // regCount = "CA 182736,CY 523519,CJ 812328";
     
   return regCount.split(',').length;
   }