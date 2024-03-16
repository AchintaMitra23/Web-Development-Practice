//////////////////// Class based inheritance ///////////////////
class Person {
    constructor(name) {
        this.name = name;
    }
    talk() {
        return this.name + " Talking";
    }
}
const me = new Person("Me");
const you = new Person("You");

console.log(me.talk());
console.log(you.talk());

//////////////////////////////////////////////
// if the bugs is identified in the function ..... how to resolve that within a second.
Person.prototype.talk = function() {
    return this.name + " Eating and talking";
}

console.log(me.talk());
console.log(you.talk());


///////////////////////////////////////////////////
class Human {
    constructor(name) {
        this.name = name;
    }
    talk() {
        return this.name + " Talking";
    }
}

class SuperHuman extends Human {
    constructor(name1) {
        super(name1);
        this.name1 = name1;
    }
    fly() {
        return this.name1 + " Flying";
    }
}

const ryan = new Human("Ryan");
const smith = new SuperHuman("Smith");
console.log(ryan.talk());
//console.log(ryan.fly());
console.log(smith.talk());
console.log(smith.fly());


///////////////////////////////////////////////
const human = {
    talk(name) {
        return name + " Talking";
    }
}
const jonas = Object.create(human);
console.log(jonas.talk("Jonas"));


////////////////////////////////////////////////
const rick = {};
console.log(rick);
Object.setPrototypeOf(rick, human);
console.log(rick.talk("Rick"));