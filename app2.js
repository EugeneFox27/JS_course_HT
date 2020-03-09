let car = {
  color: 'white',
  maxSpeed: 250,
  audio: {
    brand: 'Sony',
    speakers: 12
  }
};
// car.color == 'red' ? console.log('Car is red') : console.log('Color is undefined');
console.log(car.color);

car.color = 'green';
console.log(car.color);

function colorReset() {
  car.color = 'yellow';
  console.log(car.color);
};
colorReset();
