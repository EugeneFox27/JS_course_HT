arr = [1,2,3,4,5];
function positiveSum(arr) {
  var sum = 0;
  for (let i=0; i <arr.length; i++){
    if (arr[i]>0){
    sum += arr[i];
    }
    }
    return sum;
  }