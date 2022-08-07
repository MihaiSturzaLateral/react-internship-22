/*class Animal {
    constructor(color, name, legs) {
        this.color = color
        this.name = name
        this.legs = legs
    }

    getAnimal() {
        const animalName = this.color + ' ' + this.name + ' ' + this.legs // WRONG, this must only return a value
        return animalName
    }

    getColor() {
        return this.color
    }

    setColor() {
        this.color = this.color
    }

}

const animal_1 = new Animal('brown', 'bear', 4)

console.log(animal_1.name)

console.log(animal_1.getAnimal())


class Dog extends Animal {
    constructor(breed, color, name, legs) {
        this.breed = breed
        super(color, name, legs)
        //super(name)
        //super(legs)
    }

    show() {
        return this.breed + ' ' + this.getAnimal()
    }

}

const dog = new Dog('rotvailer', 'black', 'namos', 4)
*/

class Animal {
    constructor(color, name, legs) {
        this.name = name;
        this.color = color;
        this.legs = legs;
    }

    greet() {
        console.log(`Hello ${this.name}, my color is ${this.color} and i have ${this.legs} legs`,);
    }
}

// inheriting parent class
class Dog extends Animal {

}

let student1 = new Animal('Verde', 'Madalin', 7);
student1.greet();
