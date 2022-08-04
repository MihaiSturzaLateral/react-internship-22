const temperature = [76, 72, 68, 79, 54, 65]
Math.min(temperature)

console.log(Math.min(temperature))

console.log('------------')

const temperature2 = [76, 72, 68, 79, 54, 65]
Math.min(...temperature)

console.log(Math.min(...temperature))

console.log('------------')

const tvShows = ["Six Feet Under", "Chernobyl", "Black Mirror", "Fleabag"]
console.log(tvShows)

// or

console.log(...tvShows)

console.log('------------')

console.log("this s#@* is bananas: ", ..."BANANAS");

console.log('------------')

// Spread & Array Literals

const parents = ["Lorie", "Steve"];
const kids = ['Jake', "Annie", "Jess"];

const fullFamily = [...parents, ...kids]

console.log(fullFamily)

console.log('------------')

// Copying An Array

const originals = ["Mona Lisa", "American Gothic", "The School of Athens"];
const copies = [...originals];
console.log(copies)

originals.push("Nighthawks");
console.log(copies);

console.log('------------')

const gameBoard = [['O', 'O'], ['O', 'O'], ['O', 'O']];
const boardCopy = [...gameBoard];
gameBoard[1][0] = "X";

console.log(gameBoard)

console.log('------------')

// Spread & Object Literals

const mainColors = { brightRed: "#e55039", waterfallBlue: "#38ada9" };
const accentColors = { lightGrey: "#778ca3", swanWhite: "#f7f1e3" };

const fullPalette = { ...mainColors, ...accentColors }
console.log(fullPalette)

console.log('------------')

// Spread & Immutability

const todos = [
    { user: 'Brick', completed: false, task: "Upload Video" },
    { user: "Lilith", completed: true, task: "Rob Bank" }
]

function addTodo(newTodo) {
    todos.push(newTodo)
}

console.log('------------')

const todos2 = [
    { user: 'Brick', completed: false, task: "Upload Video" },
    { user: "Lilith", completed: true, task: "Rob Bank" }
]

function addTodo2(newTodo) {
    return [...todos, { ...newTodo, completed: false }]
}

const newTodo2 = addTodo({ user: "Abraham", task: "Feed Bloodwing" })

console.log('------------')