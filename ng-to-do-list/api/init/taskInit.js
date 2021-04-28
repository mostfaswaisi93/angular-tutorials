const Task = require('../db/models/task.model');

const mongoose = require('mongoose');

// Connect to db
mongoose.connect('mongodb://localhost/node-to-do-list', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Connected to DB...');
    }
});

const tasks = [
    new Task({
        taskName: 'Task One',
        date: '2018-12-06',
        status: '1',
        description: 'Test One'
    }),
    new Task({
        taskName: 'Task Two',
        date: '2019-12-06',
        status: '2',
        description: 'Test Two'
    }),
    new Task({
        taskName: 'Task Three',
        date: '2020-12-06',
        status: '3',
        description: 'Test Three'
    })
]

var done = 0;

for (var i = 0; i < tasks.length; i++) {
    tasks[i].save((error, doc) => {
        if (error) {
            console.log(error)
        }
        console.log(doc)
        done++
        if (done === tasks.length) {
            mongoose.disconnect();
        }
    });
}