require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const employeeRoute = require('./routes/employeeRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
const app = express();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;

app.use(cors());
// accept json format of data
app.use(express.json());
app.use('/api', employeeRoute);
var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}

// for allowing specific url to access your apis
// var corsOptions = {
//     origin: 'http://example.com', // for multiple URLs use [url1, url2, url3 ....]
//     optionsSuccessStatus: 200
// }
// app.use(cors(corsOptions));

// get home route
app.get('/', (req, res) => {
    res.send('Hello Node API');
});

app.use(errorMiddleware);
// connection to mongo DB and localhost with PORT 
mongoose.set('strictQuery', false);
mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log('Connected to Mongo DB...');
        app.listen(PORT, () => {
            console.log(`Listening to PORT: ${PORT}`);
        });
    })
    .catch(() => console.log('Failed to connect...'));