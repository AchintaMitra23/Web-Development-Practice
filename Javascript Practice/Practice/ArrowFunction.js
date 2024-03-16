// Anonymous Function to Arrow Function
// const sayHello = function() {
//     return "Hello";
// }
const sayHello1 = () => {
    return "Hello";
}
const sayHello2 = (name) => {
    return "Hello " + name;
}
console.log(sayHello1());
console.log(sayHello2("John"));

// Callback Function to Arrow Function
// const timeout = setTimeout(function() {
//     console.log("Hello");
// }, 3000);
const timeout = setTimeout(() => {
    console.log("Hello");
}, 3000);
console.log(timeout);

// Named Function to Arrow Function
// FactoryFunction
// function sayHello3() {
//     return "Hello";
// }
//console.log(sayHello3());

// ConstructorFunction
// function Buffallo(age) {
//     this.age = age;
// }
// const buff = new Buffallo(12);
// console.log(buff);

// Note : We can't have the named arrow function

// Object Methods
// const objects = new Object({
//     talk: function() {
//         return "hello Object";
//     }
// });
const objects = new Object({
    talk: () => {
        return "hello Object";
    }
});
console.log(objects.talk());

// Binding with 'this'
const joseph = {
    name: "Joseph",
    talk: function() {
        return this;
    },
    arrowTalk: () => {
        return this;
    }
}
console.log(joseph.talk());
console.log(joseph.arrowTalk());