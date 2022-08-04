const array1 = ['a', 'b', 'c']

const iterator1 = array1.entries()

console.log(iterator1.next().value)

console.log(iterator1.next().value)

console.log('------------')

// Iterating with index and element

const a = ["a", "b", "c"]

for (const [index, element] of a.entries()) {
    console.log(index, element)
}

console.log('------------')

// Using a for...of loop

const array = ["a", "b", "c"];
const arrayEntries = array.entries()

for (const element of arrayEntries) {
    console.log(element);
}