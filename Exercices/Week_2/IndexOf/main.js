const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));

console.log(beasts.indexOf('bison', 2));

console.log(beasts.indexOf('giraffe'));

console.log('----------')

const array = [2, 9, 9];
console.log(array.indexOf(2))
console.log(array.indexOf(7))
console.log(array.indexOf(9, 2))
console.log(array.indexOf(2, -1))
console.log(array.indexOf(2, -3))

console.log('----------')

// Finding all the occurrences of an element

const indices = [];
const array2 = ['a', 'b', 'a', 'c', 'a', 'd'];
const element = 'a';
let idx = array2.indexOf(element);
while (idx != -1) {
    indices.push(idx);
    idx = array2.indexOf(element, idx + 1);
}
console.log(indices);

console.log('----------')

// Finding if an element exists in the array or not and updating the array

function updateVegetablesCollection(veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}

const veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateVegetablesCollection(veggies, 'spinach');

updateVegetablesCollection(veggies, 'spinach');
