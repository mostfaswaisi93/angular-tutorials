const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    taskName: {
        type: String,
        required: 'This Filed is required'
    },
    date: {
        type: Date,
        required: 'This Filed is required'
    },
    status: {
        type: String,
        required: 'This Filed is required'
    },
    description: {
        type: String,
        required: 'This Filed is required'
    }
});

module.exports = mongoose.model('task', taskSchema);