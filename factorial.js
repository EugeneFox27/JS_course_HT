var n = 20;
console.log(factorial(n));


function factorial(n){
    if (n == 0 || n == 1){
        return 1;
    }else if (n > 1 && n < 13){
        return (n * factorial(n - 1));
    }else{
        throw new RangeError;
    }
    }
/*
function factorial(n){




   // Calculate the factorial here
//     return (n != 1) ? n * factorial(n - 1) : 1;
/*if (n < 0){ 
        return -1;
  }else if (n == 0){ 
      return 1;
  }else {
      return (n * factorial(n - 1));
}
}
if (n == 0 || n == 1){
    return 1;
}else if (n > 1 && n < 12){
    return (n * factorial(n - 1));
}else{
    return ("RangeError");
}
}*/