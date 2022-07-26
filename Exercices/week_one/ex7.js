// 7. Create an Animal class that has color, name, legs as parameters. Create different methods for these - constructors, getters, setters.

// Simple class with properties that get initialized with the parameters from the constructor
class Animal1 {
    constructor(color, name, legs) {
        this._color = color;
        this._name = name;
        this._legs = legs;
    }
}

const cat1 = new Animal1("brown", "Catthew", 4)


// Class with properties that get initialized with the inner functions(setters) in the constructor
// + getters - that will return the properties.

class Animal2 {
    constructor(color, name, legs) {
        this.setColor(color);
        this.setName(name);
        this.setLegs(legs);
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

}

const cat2 = new Animal2()
cat2.setColor = "brown";
cat2.setName = "Catthew";
cat2.setLegs = 4;
// v1
const cat2Model = `${cat2.getName()} is a ${cat2.getColor()} with ${cat2.getLegs()} legs`
//v2
const cat2Model2 = `${cat2._name} is a ${cat2._color} with ${cat2._legs} legs`