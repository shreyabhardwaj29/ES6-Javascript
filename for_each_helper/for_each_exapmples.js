/* Array helper methods -> forEach,map,filter,find,every,some,reduce
*/
var colors = [ 'red', 'blue', 'green' ];
//normal for loop:
for (var i = 0; i < colors.length; i++)
{
  console.log(colors[i]);
}
//same as above with forEach
colors.forEach(function(color){
  console.log(color);
});
// Create an array of numbers
var numbers = [1,2,3,4,5];
//variable to hold the sum
var sum = 0;
//loop over array incrementing the sum value

numbers.forEach(function(number) {
  sum += number;
});

//print sum
sum;