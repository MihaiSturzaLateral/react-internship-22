/*7. Create an Animal class that has color, name, legs as parameters.
  Create different methods for these - constructors, getters, setters.*/

  class Animal {
    constructor(color, name, legs){
        this.color = color;
        this.name = name;
        this.legs = legs;
    }
    get getColor(){
        return this.color;
    }
    get getName(){
        return this.name;
    }
    get getLegs(){
        return this.legs;
    }
    set setColor(newColor){
        this.color = newColor;
    }
    set setName(newName){
        this.name = newName;
    }
    set setLegs(newLegs){
        this.legs = newLegs;
    }
  }