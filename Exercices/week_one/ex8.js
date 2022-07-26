//8. Define  a Dog class that extends the Animal class with a constructor(use the specific function to access all the properties from the parent class) - breed, color, name, legs as parameters. Also to have  setBreed(), setColor(), setName(), setLegs() methods- that set the breed, color, name and legs for dog with getBreed(), getColor(), getName(), getLegs() methods that return the breed, the color, name and the legs for each dog. Create an instance of the Dog class and play around with the setters and getters.(Print them to the console)

class Animal2 {
    constructor(color, name, legs, breed) {
        this.setColor(color);
        this.setName(name);
        this.setLegs(legs);
        this.setBreed(breed);
    }
    //getters
    getColor() {
        return this._color;
    }
    getName() {
        return this._name;
    }
    getLegs() {
        return this._legs;
    }
    getBreed() {
        return this._breed;
    }
    //setters
    setColor(color) {
        this._color = color
    }
    setName(name) {
        this._name = name
    }
    setLegs(legs) {
        this._legs = legs
    }
    setBreed(breed) {
        this._breed = breed
    }
}

class Dog extends Animal2 { }


const dog1 = new Dog();

dog1.setColor("brown");
dog1.setLegs(4);
dog1.setName("Barky");
dog1.setBreed("Cane Corso");

const displayMyDog = (dog) => {
    return `${dog1.getName()} is a ${dog1.getColor()} ${dog1._breed} with ${dog1.getLegs()} legs`
};

console.log(displayMyDog(dog1));
