/*let car = {
  color: 'white'
};
let car2 = {
  color: 'brown'
};

colorChange(car);
colorChange(car2);

console.log('Car: '+ car.color);
console.log('Car2: '+ car2.color);

function colorChange(theCar) {
  theCar.color = 'yellow';
}
*/
// console.log(car.color);
let car = {maxSpeed: 240};
speedChange();

function speedChange(){
  console.log('Speed was ' +car.maxSpeed);
  car.maxSpeed = 300;
  console.log('Speed became ' +car.maxSpeed)
};
