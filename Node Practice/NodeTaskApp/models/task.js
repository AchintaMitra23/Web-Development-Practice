const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide the title']
    },
    description: {
        type: String,
        required: false
    },
    completedFlag: {
        type: Boolean,
        required: true,
        default: false
    },
    userId: {
        type: Object,
        required: [true, 'Please provide userID...']
    }
}, {
    timestamps: true
});

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;