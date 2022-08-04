function Dog(name) {
    this.name = name
}

const dog1 = new Dog('Gabby')

Dog.prototype.toString = function dogToString() {
    return `${this.name}`
};

console.log(dog1.toString())

console.log('----------------')

function Dog(name, breed, color, sex) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.sex = sex;
}

const theDog = new Dog('Gabby', 'Lab', 'chocolate', 'female')

console.log(theDog.toString())

Dog.prototype.toString = function dogToString() {
    return 'Dog ' + this.name + ' is a ' + this.sex + ' ' + this.color + ' ' + this.breed
}

// Using toString() to detect object class

const toString = Object.prototype.toString

toString.call(new Date)
toString.call(new String)

toString.call(Math)

toString.call(undefined)
toString.call(null)

console.log('------------')

const myDate = new Date()
Object.prototype.toString.call(myDate)

myDate[Symbol.toStringTag] = 'myDate'
Object.prototype.toString.call(myDate);

Date.prototype[Symbol.toStringTag] = 'prototype polluted'
Object.prototype.toString.call(new Date())