/*

map calls a provided callbackFn function once 
for each element in an array, in order, and
 constructs a new array from the results. 
 callbackFn is invoked only for indexes of the
  array which have assigned values (including 
    undefined).
 */

// Mapping an array of numbers to an array of square roots

const numbers = [1, 4, 9]
const roots = numbers.map((num) => Math.sqrt(num))

console.log(roots)

console.log('-----------')

//Using map to reformat objects in an array

const kvArray = [{ key: 1, value: 10 },
{ key: 2, value: 20 },
{ key: 3, value: 30 }];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }))

console.log(reformattedArray)

console.log('-----------')

//Mapping an array of numbers using a function containing an argument

const numbers2 = [1, 4, 9];
const doubles = numbers2.map((num) => num * 2)

console.log(doubles)

console.log('-----------')

// Using map generically

const map = Array.prototype.map;
const charCodes = map.call('Hello World', (x) => x.charCodeAt(0))

console.log(charCodes)


console.log('-----------')

// Using map generically querySelectorAll

//const elems = document.querySelectorAll('select option:checked');
//const values = Array.prototype.map.call(elems, ({ value }) => value)

const strings = ['10', '10', '10'];
const numbers3 = strings.map(parseInt);

console.log(numbers3)

console.log('-----------')

// Mapped array contains undefined
const numbers4 = [1, 2, 3, 4];
const filteredNumbers = numbers4.map((num, index) => {
    if (index < 3) {
        return num;
    }
})

console.log(filteredNumbers)

