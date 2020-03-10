var year = 1;

century(year);
console.log(century(year));

function century(year) {
    // Finish this :)
      if (year <= 0){
      return "Negative year is not allowed";
      }else if(year<=100){
      return 1;
      }else if(year % 100 == 0){
      return parseInt(year / 100);
      }else{
      return parseInt((year / 100) +1);
      }
  }
  