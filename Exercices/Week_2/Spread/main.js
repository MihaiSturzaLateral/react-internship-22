// Spread syntax

function sum(x, y, z) {
    return x + y + z
}

const numbers = [1, 2, 3];

console.log(sum(...numbers))


console.log('---------')

const array = [1, 2, 3, 4]
const obj = { ...array }

console.log(obj)

console.log('---------')

// Replace apply()
function myFunction(x, y, z) { }

const args = [0, 1, 2];

myFunction(...args)

// Apply for new operator

const dateFields = [1970, 0, 1]
const d = new Date(...dateFields)

// Spread in array literals

const parts = ['shoulders', 'knee']
const lyrics = ['head', ...parts, 'and', 'toes']

// Copy an array
const arr = [1, 2, 3]
const arr2 = [...arr]

arr2.push(4)

console.log(arr2)

console.log('-------------')

// A better way to concatenate arrays

let arr3 = [0, 1, 2]
const arr4 = [3, 4, 5]

arr3 = arr3.concat(arr4)
console.log(arr3)

console.log('-------------')

let arr5 = [0, 1, 2]
let arr6 = [3, 4, 5]

arr5 = [...arr5, ...arr6]

console.log(arr5)

console.log('-------------')


// unshift

const arr7 = [0, 1, 2]
const arr8 = [3, 4, 5]

Array.prototype.unshift.apply(arr7, arr8)

let arr9 = [0, 1, 2]
let arr10 = [3, 4, 5]

arr9 = [...arr10, ...arr9]
console.log(arr9)

console.log('-------------')

// Spread in object literals

const obj1 = { foo: 'bar', x: 42 }
const obj2 = { foo: 'baz', y: 13 }

const clonedObj = { ...obj1 }

const clonedObj2 = { ...obj2 }

console.log(clonedObj)
console.log(clonedObj2)


console.log('-------------')

// Object.assign() 
const obj3 = { foo: 'bar', x: 42 }
Object.assign(obj3, { x: 1337 })
console.log(obj3)

console.log('-------------')

const objectAssign = Object.assign({ set foo(val) { console.log(val); } }, { foo: 1 })

const spread = { set foo(val) { console.log(val); }, ...{ foo: 1 } }


// You cannot naively re-implement the Object.assign() function through a single spread operator:

const obj4 = { foo: 'bar', x: 42 }
const obj5 = { foo: 'baz', y: 13 }
const merge = (...objects) => ({ ...objects })

const mergedObj1 = merge(obj4, obj5)

const mergedObj2 = merge({}, obj4, obj5)

console.log(mergedObj1)
console.log(mergedObj2)

console.log('-------------')

const obj6 = { foo: 'bar', x: 42 };
const obj7 = { foo: 'baz', y: 13 };
const merge2 = (...objects) => objects.reduce((acc, cur) => ({ ...acc, ...cur }))

const mergedObj3 = merge(obj6, obj7)

console.log(mergedObj3)
