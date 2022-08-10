class Animal{
    constructor(color, name,legs){
        this.color=color;
        this.name=name;
        this.legs=legs;
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
    set setColor(col){
        this.color=col;
    }
    set setName(nm){
        this.name=nm;
    }
    set setLegs(lg){
        this.legs=lg;
    }
}

let dog=new Animal("grey","Asia","0.85cm",4);
dog.setName="Maya";
console.log(`Proprietatile animalului: ${dog.getColor} ${dog.getName} ${dog.getLegs}`);

class Dog extends Animal{
    constructor(color, name,legs,breed){
        super(color,name,legs)
        this.breed=breed;
    }
    get getBreed(){
        return this.breed=breed;
    }
    set setBreed(brd){
        this.breed=brd;
    }
}

let dg=new Dog("black", "Ela",4,"No");
console.log(`Proprietatile animalului: ${dg.getColor} ${dg.getName} ${dg.getLegs} ${dg.breed}`);
let dg2=new Dog();
dg2.setName="Ivana";
dg2.setColor="Braun";
dg2.setLegs=4;
dg2.setBreed="No";
console.log(`Proprietatile animalului: ${dg2.getColor} ${dg2.getName} ${dg2.getLegs} ${dg2.breed}`);