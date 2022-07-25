// 5. Implement an example of a callback function.

function sum(num1, num2) {
  return num1 + num2;
}
function calculate(num1, num2, sum) {
  //sum is the call back function
  return sum(num1, num2);
}
var result = calculate(3, 5, sum);
console.log(result); //  result is 8 --> sum = 3+5
