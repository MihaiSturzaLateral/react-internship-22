const array1 = [5, 12, 8, 130, 44]

const found = array1.find(element => element > 10)

console.log(found)

console.log('------------')

const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
]

function isCherries(fruit) {
    return fruit.name === 'cherries'
}

console.log(inventory.find(isCherries))

console.log('------------')

//Using arrow function and destructuring

const inventory2 = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
]

const result = inventory.find(({ name }) => name === 'cherries')

console.log(result)

console.log('------------')

// Find a prime number in an array

function isPrime(element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime))
console.log([4, 5, 8, 12].find(isPrime))

console.log('------------')

const array = [0, 1, , , , 5, 6];

array.find(function (value, index) {
    console.log('Visited index ', index, ' with value ', value);
});

array.find(function (value, index) {
    if (index === 0) {
        console.log('Deleting array[5] with value ', array[5]);
        delete array[5];
    }
    console.log('Visited index ', index, ' with value ', value);
})