var arr = [1,3,2,5,4,5,7,6];
function findDup(arr){
    arr.sort(function(a, b){return a - b});
    for (var i = 0; i <= arr.length; i++){
    if (arr[i] == arr[i+1]){
        return arr [i];
    }
        } 
}
console.log(findDup(arr));