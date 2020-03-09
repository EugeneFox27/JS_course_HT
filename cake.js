function cake(x, y){
  let num=y.split('').reduce((a,b,i)=>a+(i%2===0?b.charCodeAt(0):b.charCodeAt(0)-96),0);
   return x*0.7>num ?'That was close!':'Fire!'
   }


/*Test.describe("Example tests",_=>{
    Test.assertEquals(cake(900, 'abcdef'), 'That was close!');
    Test.assertEquals(cake(56, 'ifkhchlhfd'), 'Fire!'); 
    Test.assertEquals(cake(256, 'aaaaaddddr'), 'Fire!');
    });
*/

function cake(x, y){

  for (var i = 0, sum = 0; i < y.length; i++){
     sum += y.charCodeAt(i);
  }
   if(sum > x * .7){
    return 'Fire!'
 } else return 'That was close!'
 
 }


/*
var x = 900;
var y = 'aaaaaddddr';
function cake(x, y){
    var z = Number(y.charCodeAt(0));
    // vaz c = x * 0.7
    if (Number(x * 0.7) > z ){
        return "That was close!";
        } else {
        return "Fire!";
        }   
    //     return (x * 0,7) > z ?  'That was close!' : 'Fire!'
      }
*/
/*/*
function cake(x, y){
    var z = Number(y.charCodeAt(0));
    if ((x*0,7) > z ){
        return "That was close!"
        } else {
        return "Fire!"
        }   
    //     return (x * 0,7) > z ?  'That was close!' : 'Fire!'
      }

      console.log(typeof(x*0.7));
      console.log(typeof(z));
      

/*
function cake(x, y){
    var z = Number(y.charCodeAt(0));
     if ((x*0.7) > z ){
     return "That was close!"
     } else {
     return "Fire!"
     }   
 //     return (x * 0,7) > z ?  'That was close!' : 'Fire!'
   }

console.log(typeof(z));

// function test(){
    var z = Number(y.charCodeAt(0));
// }
console.log(z);
    var sum = 0;
      for (var i = 0; i < y.length; i++) {
        if(i%2!=0){
          sum=sum+(y[i].charCodeAt(0)-96);
          }
        else{
          sum = sum + y[i].charCodeAt(0);
            }
      }
    return (x * 0,7) > sum ?  'That was close!' : 'Fire!'
  }

console.log(cake());
*/

// function ascii (y) { return charCodeAt(y); }
// console.log(ascii(y));
