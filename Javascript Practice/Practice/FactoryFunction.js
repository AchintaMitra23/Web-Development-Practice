function personFactory(name) {
    const object = {
        talk() {
            return 'I am ' + name;
        }
    }
    return object;
}
const achinta = personFactory("Achinta");
const legend = personFactory("Legend");
console.log(achinta.talk());
console.log(legend.talk());


var document = new Document('index.html');

function createElement(type, text, color) {
    const el = document.createElement(type);
    el.innerText = text;
    el.style.color = color;
    document.body.append(el);

    return {
        el,
        setText(text) {
            el.innerText = text;
        },
        setColor(color) {
            el.style.color = color;
        },
    }
}

const h1 = createElement('h1', "Hello World", 'blue');
console.log(h1);
const p = createElement('p', "Love Javascript", "brown");
console.log(p);