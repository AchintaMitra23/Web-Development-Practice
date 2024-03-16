const mongoose = require('mongoose');

const UserScehma = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide the user name...']
    },
    email: {
        type: String,
        required: [true, 'Please provide the email ID...']
    },
    password: {
        type: String,
        required: [true, 'Please provide the password...']
    },
    contact: {
        type: Number,
        required: [true, 'Please provide the contact...']
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', UserScehma);
module.exports = User;