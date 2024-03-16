const dude = {}

dude.name = "Achinta";
dude.age = 24;
console.log(dude);

console.log(Object.toString());
console.log(Object.valueOf());


///////////////
const myBrothers = ["Alex", "Ben"];
console.log(myBrothers);
const userName = "Wasir";
console.log(userName.charAt(0));

//////////////////
const woman = {
    kind: "Woman",
}
const wasir = Object.create(woman);
console.log(wasir);
wasir.age = 25;
console.log(wasir);
console.log(wasir.kind);
console.log(wasir.age);

//////////////////////////
const ben = Object.create(wasir);
ben.age = 30;
console.log(ben);
console.log(ben.kind);
console.log(ben.age);


/////////////////////////////////////
class Parent {
    constructor(name) {
        this.name = name;
    }
    talk() {
        return this.name + " Talking";
    }
}
class SpiderMan extends Parent {
    constructor(name, name1) {
        super(name);
        this.name1 = name1;
    }
    fly() {
        return this.name1 + " Flying";
    }
}
const obj = new SpiderMan("Object1", "Object2");
console.log(obj.fly());
console.log(obj.talk());

//////////////////////////////////////////
function Hello(name) {
    this.name = name;
}
const object = new Hello("Ryan");
console.log(object.__proto__ === Hello.prototype);
Hello.prototype.walk = () => {
    return "Walking";
}
console.log(object.walk());