class Animal {
    constructor(color, name, legs) {
        this.color = color
        this.name = name
        this.legs = legs
    }

    getAnimal() {
        const animalName = this.color + ' ' + this.name + ' ' + this.legs
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