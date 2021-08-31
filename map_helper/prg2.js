/* Plucking one property of an object from an array of objects*/
var cars = [
  { model: 'Buick', price: 'CHEAP'},
  { model: 'Camaro', price: 'EXPENSIVE'}
  ];

var prices =  cars.map(function(car) {
  return car.price;
});

prices;