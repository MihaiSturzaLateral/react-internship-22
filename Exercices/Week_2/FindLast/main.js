/*
const array1 = [5, 12, 50, 130, 44]

const found = array1.findLast((element) => element > 45)

console.log(found)
*/

/*
const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'fish', quantity: 1 },
    { name: 'cherries', quantity: 5 }
];

// return true inventory stock is low
function isNotEnough(item) {
    return item.quantity < 2
}

console.log(inventory.findLast(isNotEnough))
*/

// Using arrow function and destructuring

/*
const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'fish', quantity: 1 },
    { name: 'cherries', quantity: 5 },
];

const result = inventory.findLast(({ quantity }) => quantity < 2)

console.log(result)
*/

// Find last prime number in an array
/*
function isPrime(element) {
    if (element % 2 === 0 || element < 2) {
        return false;
    }
    for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
        if (element % factor === 0) {
            return false;
        }
    }
    return true;
}

console.log([4, 6, 8, 12].findLast(isPrime))
console.log([4, 5, 7, 8, 9, 11, 12].findLast(isPrime))
*/

// Nonexistent and deleted elements are visited

const array = [0, 1, , , , 5, 6]

array.findLast(function (value, index) {
    console.log(`Visited index ${index} with value ${value}`);
})

array.findLast(function (value, index) {
    if (index === 6) {
        console.log(`Deleting array[5] with value ${array[5]}`);
        delete array[5];
    }
    console.log(`Visited index ${index} with value ${value}`);
})