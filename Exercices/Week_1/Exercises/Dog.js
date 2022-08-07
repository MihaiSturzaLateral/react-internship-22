//import { Animal } from "./Animal"
const { Animal } = require('./Animal.js')

class Dog extends Animal {
    constructor(breed, color, name, legs) {
        --> super method first
        super(color,name,legs);
        this.breed = breed
        super(color) //wrong
        super(name) //wrong
        super(legs) //wrong
    }

    show() {
        return this.breed + ' ' + this.getAnimal()
    }

}

const dog = new Dog('rotvailer', 'black', 'namos', 4)
