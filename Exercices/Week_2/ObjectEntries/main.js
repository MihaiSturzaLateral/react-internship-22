const object1 = {
    a: 'somestring',
    b: 42
}

for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`)
}

console.log('------------')

const obj = { foo: 'bar', baz: 42 }
console.log(Object.entries(obj))

console.log('------------')

const obj2 = { 0: 'a', 1: 'b', 2: 'c' }
console.log(Object.entries(obj2))

console.log('------------')

const anObj = { 100: 'a', 2: 'b', 7: 'c' }
console.log(Object.entries(anObj))

console.log('------------')

const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } })

myObj.foo = 'bar'
console.log(Object.entries(myObj))

console.log('------------')

console.log(Object.entries('foo'))
console.log(Object.entries(100))

const obj3 = { a: 5, b: 7, c: 9 }
for (const [key, value] of Object.entries(obj3)) {
    console.log(`${key} ${value}`)
}


Object.entries(obj3).forEach(([key, value]) => {
    console.log(`${key} ${value}`)
})

console.log('------------')

// Converting an Object to a Map

const obj4 = { foo: 'bar', baz: 42 }
const map = new Map(Object.entries(obj4))
console.log(map)

console.log('------------')

// Iterating through an Object

const obj5 = { foo: 'bar', baz: 42 }
Object.entries(obj5).forEach(([key, value]) => console.log(`${key}: ${value}`))