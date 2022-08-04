//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));

console.log('----------')

console.log(animals.slice(2, 4));

console.log('----------')

console.log(animals.slice(1, 5));

console.log('----------')

console.log(animals.slice(-2));

console.log('----------')

console.log(animals.slice(2, -1));

console.log('----------')

console.log(animals.slice());

console.log('----------')

let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
let citrus = fruits.slice(1, 3)

console.log(citrus)

console.log('----------')

let myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }
let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997']
let newCar = myCar.slice(0, 2)

console.log('myCar = ' + JSON.stringify(myCar))
console.log('newCar = ' + JSON.stringify(newCar))
console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)

myHonda.color = 'purple'
console.log('The new color of my Honda is ' + myHonda.color)


console.log('myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)

console.log('----------')

// Array-like objects

function list() {
    return Array.prototype.slice.call(arguments)
}

let list1 = list(1, 2, 3)

console.log(list1)

