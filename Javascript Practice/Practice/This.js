function talk() {
    return this;
}
const me = {
    name: "Ryan",
    talk,
}
console.log(me.talk());
console.log(talk());

function walk() {
    return this.userName + " is Walking.";
}

const john = {
    userName: "John",
    walk,
}
const cila = {
    userName: "Cila",
    walk,
}
const pamela = {
    userName: "Pamela",
}
const pamelaWalk1 = walk.bind(pamela);
const pamelaWalk2 = walk.call(pamela);
console.log(john.walk());
console.log(cila.walk());
console.log(pamelaWalk1());
console.log(pamelaWalk2);

// .bind(), .call(), .apply()