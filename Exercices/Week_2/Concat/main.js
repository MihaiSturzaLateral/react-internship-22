const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);

console.log('-------------')

const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];

const alphaNumeric = letters.concat(numbers)

console.log(alphaNumeric)

console.log('-------------')

// Concatenating three arrays

const num1 = [1, 2, 3]
const num2 = [4, 5, 6]
const num3 = [7, 8, 9]

const numbers2 = num1.concat(num2, num3)

console.log(numbers2)

console.log('-------------')

// Concatenating values to an array

const letters2 = ['a', 'b', 'c']

const alphaNumeric2 = letters.concat(1, [2, 3])

console.log(alphaNumeric2)

console.log('-------------')

// Concatenating nested arrays

const num11 = [[1]]
const num22 = [2, [3]]

const numbers33 = num11.concat(num22)

console.log(numbers33)

num11[0].push(4)

console.log(numbers33)

console.log('-------------')

// Concatenating array-like objects with Symbol.isConcatSpreadable

const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 }
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true }

console.log([0].concat(obj1, obj2))

