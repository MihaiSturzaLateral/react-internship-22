//7. Create an Animal class that has color, name, legs as parameters. Create different methods for
// these - constructors, getters, setters.
class Animal {
  constructor(name, color, legs) {
    this.name = name;
    this.color = color;
    this.legs = legs;
  }
  set Name(newName) {
    this.name = newName;
  }
  set Color(newColor) {
    this.color = newColor;
  }
  set Legs(newLegs) {
    this.legs = newLegs;
  }
  get Name() {
    return this.name;
  }
  get Color() {
    return this.color;
  }
  get Legs() {
    return this.legs;
  }
  descriereAnimal() {
    console.log(
      `Animalul numit  ${this.name} este de culoarea ${this.color} si are ${this.legs} picioare.`
    );
  }
}

const primulAnimal = new Animal("Bursuc", "alb-negru", "4");
primulAnimal.descriereAnimal();
