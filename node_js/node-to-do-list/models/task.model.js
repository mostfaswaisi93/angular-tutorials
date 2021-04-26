const mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
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

// module.exports = mongoose.model('task', taskSchema);
mongoose.model('task', taskSchema);