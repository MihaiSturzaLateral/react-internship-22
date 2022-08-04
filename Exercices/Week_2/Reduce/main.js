// metoda veche

const numbers = [1, -1, 2, 3]

// let sum = 0
// for (let n of numbers) {
//     sum += n
// }
// console.log(sum)

// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5

// more simple

// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)

const sum2 = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})

console.log(sum)
console.log(sum2)

console.log('-------------')

const numbers2 = [175, 50, 25];

function myFunc(total, num) {
    return total - num
}

console.log(numbers2.reduce(myFunc))

console.log('-------------')

const numbers3 = [15.5, 2.3, 1.1, 4.7];

function getSum(total, num) {
    return total + Math.round(num)
}

console.log(numbers3.reduce(getSum, 0))

console.log('-------------')

const array = [15, 16, 17, 18, 19]

function reducer(previous, current, index) {
    const returns = previous + current
    console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`)
    return returns
}

array.reduce(reducer)

console.log('-------------')

// How reduce() works with an initial value

// [15, 16, 17, 18, 19].reduce((previousValue, currentValue) =>
//     previousValue + currentValue, 10
// )

// Sum of values in an object array

const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum3 = objects.reduce(
    (previousValue, currentValue) => previousValue + currentValue.x, 0
)

console.log(sum3)

console.log('-------------')

// Flatten an array of arrays

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (previousValue, currentValue) => previousValue.concat(currentValue),
    [],
)

console.log(flattened)

console.log('-------------')

// Counting instances of values in an object

const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

const countedNames = names.reduce((allNames, name) => {
    allNames[name] ??= 0
    allNames[name]++

    return allNames
}, {})

console.log(countedNames)

console.log('-------------')

// Grouping objects by a property

const people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 },
]

function groupBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
        const key = obj[property]
        acc[key] ??= []
        acc[key].push(obj)
        return acc
    }, {})
}

const groupedPeople = groupBy(people, 'age')

console.log(groupedPeople)

console.log('-------------')

// Concatenating arrays contained in an array of objects using the spread operator and initialValue

const friends = [

    {
        name: 'Anna',
        books: ['Bible', 'Harry Potter'],
        age: 21,
    },
    {
        name: 'Bob',
        books: ['War and peace', 'Romeo and Juliet'],
        age: 26,
    },
    {
        name: 'Alice',
        books: ['The Lord of the Rings', 'The Shining'],
        age: 18,
    },

]

const allbooks = friends.reduce((previousValue, currentValue) => [...previousValue, ...currentValue.books], ['Alphabet'])
console.log(allbooks)

console.log('-------------')

// Remove duplicate items in an array

const myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']

const myArrayWithNoDuplicates = myArray.reduce((previousValue, currentValue) => {
    if (previousValue.indexOf(currentValue) === -1) {
        previousValue.push(currentValue);
    }
    return previousValue
}, []);

console.log(myArrayWithNoDuplicates)

console.log('-------------')

// Replace .filter().map() with .reduce()

const numbers4 = [-5, 6, 2, 0];

const doubledPositiveNumbers = numbers4.reduce((previousValue, currentValue) => {
    if (currentValue > 0) {
        const doubled = currentValue * 2;
        previousValue.push(doubled);
    }
    return previousValue;
}, []);

console.log(doubledPositiveNumbers); // [12, 4]

console.log('-------------')

//Running Promises in Sequence

function runPromiseInSequence(arr, input) {
    return arr.reduce(
        (promiseChain, currentFunction) => promiseChain.then(currentFunction),
        Promise.resolve(input),
    );
}

function p1(a) {
    return new Promise((resolve, reject) => {
        resolve(a * 5);
    });
}

function p2(a) {
    return new Promise((resolve, reject) => {
        resolve(a * 2);
    });
}


function f3(a) {
    return a * 3;
}

function p4(a) {
    return new Promise((resolve, reject) => {
        resolve(a * 4);
    });
}

const promiseArr = [p1, p2, f3, p4]
runPromiseInSequence(promiseArr, 10).then(console.log); // 1200

console.log('-------------')

// Function composition enabling piping

const double = (x) => 2 * x
const triple = (x) => 3 * x
const quadruple = (x) => 4 * x

const pipe = (...functions) => (initialValue) => functions.reduce((acc, fn) => fn(acc), initialValue)

const multiply6 = pipe(double, triple)
const multiply9 = pipe(triple, triple)
const multiply16 = pipe(quadruple, quadruple)
const multiply24 = pipe(double, triple, quadruple)

console.log(multiply6(6)) //multiply6(6);   // 36
console.log(multiply9(9))   // 81
console.log(multiply16(16)) // 256
console.log(multiply24(10)) // 240

