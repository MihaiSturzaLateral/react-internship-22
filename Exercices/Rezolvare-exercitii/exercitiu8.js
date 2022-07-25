/*8. Define  a Dog class that extends the Animal class with a constructor(use the specific function
     to access all the properties from the parent class) - breed, color, name, legs as parameters.
      Also to have  setBreed(), setColor(), setName(), setLegs() methods- that set the breed, color,
       name and legs for dog with getBreed(), getColor(), getName(), getLegs() methods that return the
        breed, the color, name and the legs for each dog. Create an instance of the Dog class and play
         around with the setters and getters.(Print them to the console) */
class Animal {
  constructor(name, color, legs) {
    this.name = name;
    this.color = color;
    this.legs = legs;
  }
}
class Dog extends Animal {
  constructor(breed, name, color, legs) {
    super(name, color, legs);
    this.breed = breed;
  }
  set setBreed(newBreed) {
    this.breed = NewBreed;
  }
  set setName(newName) {
    this.name = newName;
  }
  set setColor(newColor) {
    this.color = newColor;
  }
  set setLegs(newLegs) {
    this.legs = newLegs;
  }
  get getBreed() {
    return this.breed;
  }
  get getName() {
    return this.name;
  }
  get getColor() {
    return this.color;
  }
  get getLegs() {
    return this.legs;
  }
}

const dog1 = new Dog("Pitbull", "Lord", "blue tabby", "4");
console.log(
  "Rasa cainelui este: " + dog1.getBreed + " si il cheama " + dog1.getName
);
console.log(
  "Are culoarea: " + dog1.getColor + " si are " + dog1.getLegs + " picioare"
);
