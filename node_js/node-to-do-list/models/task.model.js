const mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    task_name: {
        type: String
    },
    date: {
        type: Date
    },
    status: {
        type: String
    },
    description: {
        type: String
    }
});

mongoose.model('task', taskSchema);