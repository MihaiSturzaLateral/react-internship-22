function isBigEnough(value) {
    return value >= 10
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)

console.log(filtered)

console.log('------------')

// Find all prime numbers in an array

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

function isPrime(num) {
    for (let i = 2; num > i; i++) {
        if (num % i == 0) {
            return false
        }
    }
    return num > 1
}

console.log(array.filter(isPrime))

console.log('------------')

let arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: 'undefined' }
]

let invalidEntries = 0

function filterByID(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
        return true
    }
    invalidEntries++
    return false;
}

let arrByID = arr.filter(filterByID)
console.log('Filtered Array\n', arrByID)

console.log('Number of Invalid Entries = ', invalidEntries)

console.log('------------')

// Searching in array

let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

function filterItems(arr, query) {
    return arr.filter(function (e1) {
        return e1.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })

}

console.log(filterItems(fruits, 'ap'))
console.log(filterItems(fruits, 'an'))

console.log('------------')

// Affecting Initial Array (modifying, appending and deleting)

let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']

const modifiedWords = words.filter((word, index, arr) => {
    arr[index + 1] += ' extra'
    return word.length < 6
})

console.log(modifiedWords)

// Appending new words

words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const appendedWords = words.filter((word, index, arr) => {
    arr.push('new')
    return word.length < 6
})
console.log(appendedWords)

// Deleting words
words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const deleteWords = words.filter((word, index, arr) => {
    arr.pop()
    return word.length < 6
})
console.log(deleteWords)