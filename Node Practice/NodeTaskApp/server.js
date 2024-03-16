const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const taskRouter = require('./routes/taskRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 9000;
const CONNECTION = process.env.CONNECTION;

app.use(cors());
app.use(express.json());
app.use('/task', taskRouter);
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.status(200).send(`Hello ${req.body.name}`);
});

mongoose.connect(CONNECTION)
    .then((_res) => {
        console.log(`Connected to MongoDB...`);
        app.listen(PORT, () => {
            console.log(`Listening to PORT: ${PORT}`);
        });
    }).catch((error) => console.error(error));