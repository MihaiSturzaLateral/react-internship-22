//import { Animal } from "./Animal"
const { Animal } = require('./Animal.js')

class Dog extends Animal {
    constructor(breed, color, name, legs) {
        this.breed = breed
        super(color)
        super(name)
        super(legs)
    }

    show() {
        return this.breed + ' ' + this.getAnimal()
    }

}

const dog = new Dog('rotvailer', 'black', 'namos', 4)