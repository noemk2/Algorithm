var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
  return true;
});
console.log(doubles);
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

var numbers = [1, 4, 9];
var roots = numbers.map(function(num) {
  return Math.sqrt(num);
});
console.log(roots);
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]
