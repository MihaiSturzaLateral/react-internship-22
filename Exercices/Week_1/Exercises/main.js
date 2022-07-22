const arr = [13, 22, 15, 50];

console.log(arr.sort())

const arr2 = []
for (let i = arr.length - 1; i >= 0; i--) {
    //console.log(arr[i])
    arr2.push(arr[i])
}
console.log(arr2)

console.log(Math.max(...arr))
console.log(Math.min(...arr))

console.log('---')


for (i = 0; i <= arr2.length - 2; i++) {
    console.log(arr2[i])
}

console.log('------')

function findMinMax(arr) {
    min = Math.max(...arr);
    max = Math.min(...arr);

    return [min, max];
}
console.log(findMinMax(arr))
console.log('------------')

const count = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

for (let j = 0; j < count.length; j++) {
    if (count[j].length == 5)
        console.log(count[j])
}

console.log('------------')

const arr3 = []
for (i = 0; i < count.length; i++) {
    arr3.push(count[i].toUpperCase())
}
console.log(arr3)

console.log('----')

const arr4 = []
let k = 0
while (k < count.length) {
    arr4.push(count[k].toUpperCase())
    k++
}
console.log(arr4)


console.log('----')
const arr5 = []
let t = 0
do {
    arr5.push(count[t].toUpperCase())
    t++;
} while (t < count.length);

console.log(arr5)

console.log('----')

const map1 = count.map(value => value.toUpperCase())

console.log(map1)

console.log('------------')

// 4.
let mark = 7;

if (mark > 5) {
    console.log(true)
} else if (mark < 4) {
    console.log(false)
} else
    console.log('invalid')

console.log('----')

const nr = function (nr) {
    if (mark > 5) {
        console.log(true)
    } else if (mark < 4) {
        console.log(false)
    } else
        console.log('invalid')
}


console.log(nr(3))


console.log('----')

arrFct = () => {
    if (mark > 5) {
        return true
    } else if (mark < 4) {
        return false
    } else
        console.log('invalid')
}

console.log(arrFct(3))

console.log('------------')
// 5.

function greeting(name) {
    console.log('Hello ' + name);
}

function processUserInput(callback) {
    let name = console.log('Please enter your name.');
    callback(name);
}

processUserInput(greeting);