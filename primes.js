var num = 5;

function isPrime(num) {
    if (num < 2) {
         return false;
      }
    if (num === 2) {
         return true;
      }
      
      const maximumDividor = Math.sqrt(num) + 1;
    for (let i = 2; i < maximumDividor; i++) {
         if (num % i === 0) {
           return false;
         }
      }
    return true;
    }

// Works - but really long
/*
 if (num < 2) {
     return false;
     }else{     
for (var i = 2; i<num; i++) {
     if (num % i === 0) {
       return false;
      break;     
     }
  }
return true;
}
}
*/