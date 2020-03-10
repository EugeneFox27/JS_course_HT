// Description: 
// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.
// The inputs x and y are always greater or equal to 1, so the the greatest common divisor will always be an integer that is also greater or equal to 1.

// Math.abs = возвращает абсолютное значение числа. То есть модуль числа
// example: 
x = -10;
z = Math.abs(x);
console.log(z); //z = 10 

function mygcd(x,y){
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  