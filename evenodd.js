var number = Math.random() * 10;

function EvenOrOdd(number) {
    // ...
    if (number %2 == 0){
    return "Even";
    }
    else{ 
    return "Odd";
    }
  }
console.log(number);
console.log(EvenOrOdd(number));