const exp = require('express');
const app = exp();

app.get('/', (req, res) => {
    res.send('Hello World');
}).listen(9000);

// If URL : /emp?id=<id_value>
// THEN : req.query.id
// For fetching query string in url (here is id)...
app.get('/emp/:id', (req, res) => {
    console.log(req.params.id);
    if (req.params.id == 1) {
        res.send('Hi Employee1');
    } else if (req.params.id == 2) {
        res.send('Hi Employee2');
    } else if (req.params.id == 3) {
        res.send('Hi Employee3');
    } else {
        res.send('Employee Not Exists');
    }
});