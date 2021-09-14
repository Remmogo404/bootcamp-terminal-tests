module.exports = function yearsAgo(theYear){
    const year = new Date();
     
     return year.getFullYear() - theYear;
    
   }