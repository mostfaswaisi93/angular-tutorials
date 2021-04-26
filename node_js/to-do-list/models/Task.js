const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    taskName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('task', taskSchema);