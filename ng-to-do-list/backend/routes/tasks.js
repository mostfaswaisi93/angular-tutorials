const express = require('express');
const Task = require('./models/task');
const router = express.Router();

app.post('/api/tasks', (req, res, next) => {
    const task = new Task({
        name: req.body.name,
        date: req.body.date,
        status: req.body.status,
        description: req.body.description
    });
    task.save().then(createdTask => {
        res.status(201).json({
            message: 'Task Added Successfully!',
            taskId: createdTask._id
        });
    });
});

app.get('/api/tasks', (req, res, next) => {
    Task.find().then(documents => {
        res.status(200).json({
            message: 'Tasks Fetched Successfully!',
            tasks: documents
        });
    });
});

app.delete('/api/tasks/:id', (req, res, next) => {
    Task.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json({ message: 'Task Deleted!' });
    });
});