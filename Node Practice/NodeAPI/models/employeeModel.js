const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: [true, 'Please enter full name...']
    },
    email: {
        type: String,
        required: [true, 'Please enter email ID...']
    },
    contact: {
        type: String,
        required: [true, 'Please enter conatct...']
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true,
        default: 'Analyst'
    },
    salary: {
        type: Number,
        required: true,
        default: 0
    },
    projects: [{
        type: JSON,
        required: true,
    }]
}, {
    timestamps: true,
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;