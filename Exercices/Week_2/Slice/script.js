let unboundSlice = Array.prototype.slice
let slice = Function.prototype.call.bind(unboundSlice)

function list() {
    return slice(arguments)
}

let list1 = list(1, 2, 3)

console.log(list1)