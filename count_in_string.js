// считает количество повторяющихся символов в словах и выводит на экран. 

function count (string) {  
    // The function code should be here
     var letterCountObj = {};
    var arr = string.split('');
    arr.forEach(function(elem){
      if(letterCountObj[elem]){
        letterCountObj[elem]++;
      } else {
        letterCountObj[elem] = 1;
      }
    });
    return letterCountObj;
  }
  