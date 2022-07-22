/*8. Define  a Dog class that extends the Animal class with a constructor
(use the specific function to access all the properties from the parent class) -
 breed, color, name, legs as parameters. Also to have  setBreed(), setColor(), setName(), 
 setLegs() methods- that set the breed, color, name and legs for dog with getBreed(), getColor(),
  getName(), getLegs() methods that return the breed, the color, name and the legs for each dog. 
  Create an instance of the Dog class and play around with the setters and getters.(Print them to the console)*/
  class Animal {
    constructor(color, name, legs){
        this.color = color;
        this.name = name;
        this.legs = legs;
    }
}
    class Dog extends Animal{
        constructor(color, name, legs, breed){
            super(color, name, legs);
            this.breed = breed;
        }
        set setBreed(newBreed){
            this.breed = newBreed;
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
        get getBreed(){
            return this.breed;
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
    }
    myDog = new Dog('black', 'Axel', '4', 'Bulldog');
    console.log(myDog);

