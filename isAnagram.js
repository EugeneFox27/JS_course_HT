
test = "ound"; 
original = "r   ound";

function isAnagram(test, original){
    var x1 = test.toLowerCase().split('').sort().join('').trim();
    var x2 = original.toLowerCase().split('').sort().join('').trim();
        return x1 === x2;
}
console.log(isAnagram(test, original));




