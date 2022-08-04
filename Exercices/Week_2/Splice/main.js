const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');

console.log(months)

months.splice(4, 1, 'May');

console.log(months)

console.log('------------')

let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum')

console.log(myFish)

console.log('------------')

let myFish2 = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed2 = myFish2.splice(2, 0, 'drum', 'guitar')

console.log(myFish2)

console.log('------------')

//Remove 1 element at index 3

let myFish3 = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
let removed3 = myFish3.splice(3, 1)

console.log(myFish3)

console.log('------------')

// Remove 1 element at index 2, and insert "trumpet"

let myFish4 = ['angel', 'clown', 'drum', 'sturgeon']
let removed4 = myFish4.splice(2, 1, 'trumpet')

console.log(myFish4)

// Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"

let myFish5 = ['angel', 'clown', 'trumpet', 'sturgeon']
let removed5 = myFish5.splice(0, 2, 'parrot', 'anemone', 'blue')

console.log(myFish5)

console.log('------------')

// Remove 2 elements, starting from index 2

let myFish6 = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
let removed6 = myFish6.splice(2, 2)

console.log(myFish6)

console.log('------------')

// Remove 1 element from index -2

let myFish7 = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed7 = myFish7.splice(-2, 1)

console.log(myFish7)

console.log('------------')

// Remove all elements, starting from index 2

let myFish8 = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed8 = myFish8.splice(2)

console.log(myFish8)