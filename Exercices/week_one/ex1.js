// Create an array with ages (numbers)and sort the array.
// Find the min and the max age.(Print them to the console)

const age = [13, 55, 55, 18, 20]

console.log(age.sort())

console.log(age.reverse())

console.log(Math.min(...age))
console.log(Math.max(13, 55, 55, 18, 20))

let ages = [10, 22, 35, 88, 44]

const sortAges = (ages) => {
    ages.sort()
    const youngest = Math.min(...ages)
    const oldest = Math.max(...ages)
    console.log(youngest)
    console.log(oldest)
}
sortAges(ages)