var n = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// Return an array
function fizzbuzz(n)
/*{ var arr = [];
  //
  for (i=0; i=n; i++){
  if (n%3==0) {
    return arr[i] = "Fizz"
  }else if (n%5 == 0) {
    return arr[i] = "Buzz"
  }else if (n%3 == 0 && n%5 == 0){
  return arr[i] = 'FizzBuzz'
  } else {
  return arr[i]=n;
  }
  }
return arr;
}
console.log(arr[]);*/
{
    for (var i=1; i < 101; i++){
        if (i % 15 == 0) console.log("FizzBuzz");
        else if (i % 3 == 0) console.log("Fizz");
        else if (i % 5 == 0) console.log("Buzz");
        else console.log(i);
    }
}


// answer is
// Return an array
function fizzbuzz(n)
    {var array = [];
    for (var i=1; i<=n;i++){
    array.push(i)
    }
      for (var i=1; i<=array.length;i++) {
       if(array[i] %3===0 && array[i] %5 === 0) {
  array[i] = 'FizzBuzz';
} else if(array[i] %3 === 0){
    array[i] = 'Fizz';
}else if(array[i] %5 === 0){
  array[i] = 'Buzz';
}}
return array;
}
