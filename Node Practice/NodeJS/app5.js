require('dotenv').config();
const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

let emps = [
    { id: 1, name: 'Achinta' },
    { id: 2, name: 'Nilanjana' },
    { id: 3, name: 'Jay' },
    { id: 4, name: 'Kashish' },
    { id: 5, name: 'Pamela' },
];

app.get('/allEmps', (req, res) => {
    res.send(emps);
});

app.get('/empById/:id', (req, res) => {
    let emp = emps.filter(obj => obj.id === parseInt(req.params.id));
    if (emp.length === 0) {
        return res.status(404).send(`Employee not found with id : ${parseInt(req.params.id)}`);
    }
    res.status(200).send(emp[0]);
});

app.get('/empById', (req, res) => {
    let emp = emps.filter(obj => obj.id === parseInt(req.query.id));
    res.send(emp[0]);
});

app.post('/saveEmp', (req, res) => {
    const schema = { name: Joi.string().min(3).required() };
    const result = Joi.validate(req.body, schema);
    if (result.error) {
        return res.status(400).send(result.error.details[0].message);
    }
    const emp = {
        id: emps.length + 1,
        name: req.body.name,
    };
    emps.push(emp);
    res.status(200).send(emp);
});

app.put('/updateEmpById/:id', (req, res) => {
    let emp = emps.filter(obj => obj.id === parseInt(req.params.id));
    if (emp.length === 0) {
        return res.status(404).send(`Employee not found with id : ${parseInt(req.params.id)}`);
    }
    const schema = { name: Joi.string().min(3).required() };
    const { error } = Joi.validate(req.body, schema);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    let fetchedEmp = emp[0];
    fetchedEmp.name = req.body.name;
    res.status(200).send(fetchedEmp);
});

app.delete('/deleteEmpById/:id', (req, res) => {
    let emp = emps.filter(obj => obj.id === parseInt(req.params.id));
    if (emp.length === 0) {
        return res.status(404).send(`Employee not found with id : ${parseInt(req.params.id)}`);
    }
    const index = emps.indexOf(emp[0]);
    emps.splice(index, 1);
    res.status(200).send(emp[0]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening to port : ${PORT}`));