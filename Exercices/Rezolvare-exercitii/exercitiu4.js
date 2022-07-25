/* 4. Implement a function that takes a mark as parameter and returns true if mark is greater than 4, returns false if the mark is less
 than 5 and returns nothing if the mark is invalid - also with an appropriate message. Implement this as an expression function, arrow
  function and declaration function. */
// expression function
const rezultatExpressionFunction = function (mark) {
  if (mark > 4) {
    return "true";
  } else if (mark < 5) {
    return "false";
  } else return null;
};
console.log(rezultatExpressionFunction(10));

// arrow function
const rezultatArrow = (mark) => {
  if (mark > 4) {
    return "true";
  } else if (mark < 5) {
    return "false";
  } else return null;
};
console.log(rezultatArrow(3));

// declaration function
function rezultatDeclaration(mark) {
  if (mark > 4) {
    return "true";
  } else if (mark < 5) {
    return "false";
  } else return null;
}
console.log(rezultatDeclaration("m"));
