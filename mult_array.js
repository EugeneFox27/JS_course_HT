/* left blank for unlimited creativity :) */
arr = [1,2,4];

/*function multiplyAll([],n){
    var n;
       for (var i = 0; i < array.length; i++) {
        element = n * array[i];
        array.push(i);
    }   
    return array;
    }
 */   
    // console.log(multiplyAll([1, 2, 4],2));

    function multiplyAll(arr){
  return function(val){
    return arr.map(el => el * val);
  }
}
console.log(multiplyAll(arr),2);