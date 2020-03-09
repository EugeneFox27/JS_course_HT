
var line = 0;
function isPalindrome(line) {
    line = String(line);
 var reversed = line.split('').reverse().join('');  
      return reversed == line;
}
console.log(isPalindrome(line));