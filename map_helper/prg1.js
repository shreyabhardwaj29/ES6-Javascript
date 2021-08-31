/* Array helper methods -> forEach,*map*,filter,find,every,some,reduce
*/
var numbers = [1,2,3,4,5];
var doubledNumbers = [];


for( var i = 0; i < numbers.length; i++){
  doubledNumbers.push(numbers[i] * 2);
}

var doubled = numbers.map(function(number) {
  return number * 2;
});

doubled;
doubledNumbers;
