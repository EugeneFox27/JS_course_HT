var str = 12345;
z = solution(str);

function solution(str){
    line = String('line');
    reversed = str.split('').reverse().join('');  
      if (reversed == str) {
        return true;
    }
      else {
        return false;
    };
};

console.log(z);

.split('').reverse().join(''); 
  return reversedStr === line


  function isPalindrome(line) {
    reversed = line.split('').reverse().join('');  
        if (reversed === line) {
          return true;
      }
        else {
          return false;
      };
  };