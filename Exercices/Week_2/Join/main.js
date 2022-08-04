const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());

console.log(elements.join(''));

console.log(elements.join('-'));


console.log('-------------')

const a = ['Wind', 'Water', 'Fire'];
console.log(a.join())
console.log(a.join(', '))
console.log(a.join(' + '))
console.log(a.join(''))

console.log('-------------')

// Joining an array-like object

function f(a, b, c) {
    const s = Array.prototype.join.call(arguments);
    console.log(s); // '1,a,true'
}

f(1, 'a', true);

console.log('-------------')

