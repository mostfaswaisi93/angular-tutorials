const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser');

const { Task } = require('./db/models');

// Load
app.use(bodyParser.json());

app.get('/tasks', (req, res) => {
    Task.fined({}).then((tasks) => {
        res.send(tasks);
    });
});
app.post('/tasks', (req, res) => {
    let taskName = req.body.taskName;
    let newTask = new Task({
        taskName
    });
    newTask.save().then((taskDoc) => {
        res.send(taskDoc);
    });
});
app.patch('/tasks/:id', (req, res) => {
    //
});
app.delete('/tasks/:id', (req, res) => {
    //
});

app.listen(3000, () => {
    console.log('Server is listening in port 3000');
});