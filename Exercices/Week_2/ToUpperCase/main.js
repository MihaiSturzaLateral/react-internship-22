console.log('alphabet'.toUpperCase())

console.log('This is a STring'.toUpperCase())

const a = String.prototype.toUpperCase.call({
    toString() {
        return 'abcdef'
    }
})

const b = String.prototype.toUpperCase.call(true)

console.log(a, b)