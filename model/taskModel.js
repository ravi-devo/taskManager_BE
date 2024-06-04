const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['Work', 'Personal'],
        required: true
    },
    dueDate: {
        type: Date
    },
    status: {
        type: String,
        enum: ['To-Do', 'Completed'],
        default: 'To-Do'
    },
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
