class Person {
    constructor(name) {
        this.name = name;
        this.walk = () => {
            return "Walking " + this.name;
        }
    }
    talk() {
        return "Hello " + this.name;
    }
}
const maria = new Person("Maria");
const joseph = new Person("Joseph");

const jasmine = new Person("Jasmine");
const alex = new Person("Alex");

console.log(maria.talk());
console.log(joseph.talk());
console.log(jasmine.walk());
console.log(alex.walk());


var document = new Document('index.html');

function SuperElement(type, content) {
    this.el = document.createElement(type);
    this.el.innerText = content;
    document.body.append(this.el);
    this.el.addEventListener('click', () => {
        alert(this.el);
    })
}

const h2 = new SuperElement('h2', "Hello World");
console.log(h2);
const array = ['a', 'b', 'c'];
const myElements = array.map(items => {
    return new SuperElement('span', items);
});
console.log(myElements);