function findShort(s){
    s = s.split(' ');
    // base case: if the length of arry is 1, return array[0]
    if (s.length <= 1) {
      return s[0].length;
    }
    // test to see if length of string[a] < string[a+1]
    if (s[0].length < s[1].length) {
      // if true remove string[a+1] and run test again
      s.splice(1,1);
      s = s.join(' ');
      return findShort(s);
    }
      // if false remove string[a] and run test again
    else {
      s.splice(0,1);
      s = s.join(' ');
      return findShort(s);
    }
  
  }