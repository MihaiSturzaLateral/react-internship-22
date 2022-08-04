const x = [1, 2, 3, 4, 5];
const [y, z] = x;

console.log(y)
console.log(z)

console.log('---------')

const obj = { a: 1, b: 2 }
const { a, b } = obj

console.log(a)
console.log(b)

console.log('---------')

const obj2 = { a: 1, b: { c: 2 } };
const { a2, b: { c: d } } = obj2;

console.log('---------')

const obj3 = { a: 1, b: { c: 2 } };
const { a3 } = obj3
let { b: { c: d3 } } = obj3

console.log(b)

console.log('---------')

const numbers = [];
const obj4 = { a: 1, b: 2 };
({ a: numbers[0], b: numbers[1] } = obj);

console.log(a)

console.log('---------')

// Default value

const [a5 = 1] = []; // a is 1
const { b5 = 2 } = { b: undefined }; // b is 2
const { c5 = 2 } = { c: null }; // c is null

console.log(a5)
console.log(b5)
console.log(c5)

console.log('---------')

const { b6 = console.log("hey") } = { b: 2 };

console.log(b6)

console.log('---------')

//Rest property

const { a7, ...others } = { a7: 1, b7: 2, c7: 3 };
console.log(others); // { b: 2, c: 3 }

const [a8, ...others2] = [1, 2, 3];
console.log(others2); // [2, 3]

console.log('---------')


// Destructuring patterns with other syntaxes

// Array destructuring
// Basic variable assignment

const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

console.log('\n')

// Destructuring with more elements than the source

const foo2 = ['one', 'two'];

const [red2, yellow2, green2, blue] = foo;
console.log(red2); // "one"
console.log(yellow2); // "two"
console.log(green2); // undefined
console.log(blue);  //undefined

console.log('---------')

// Swapping variables

let a9 = 1;
let b9 = 3;

[a9, b9] = [b9, a9];
console.log(a9); // 3
console.log(b9); // 1

console.log('---------')

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1, 3, 2]

console.log('---------')

// Parsing an array returned from a function

function f() {
    return [1, 2];
}

const [m, n] = f();
console.log(m); // 1
console.log(n); // 2

console.log('---------')

// Ignoring some returned values

function f() {
    return [1, 2, 3];
}

const [a10, , b10] = f();
console.log(a10); // 1
console.log(b10); // 3

console.log('\n')

const [c] = f();
console.log(c); // 1

console.log('---------')

// Using a binding pattern as the rest property

const [a11, b11, ...{ pop, push }] = [1, 2];
console.log(a, b); // 1 2
console.log(pop, push); // [Function pop] [Function push]

const [a12, b12, ...[c12, d12]] = [1, 2, 3, 4];
console.log(a12, b12, c12, d12); // 1 2 3 4

console.log('---------')

