const express = require('express');

const Task = require('../models/task');

const router = express.Router();

router.post('', (req, res, next) => {
    const task = new Task({
        name: req.body.name,
        date: req.body.date,
        status: req.body.status,
        description: req.body.description
    });
    task.save().then(createdTask => {
        res.status(201).json({
            message: 'Task Added Successfully!',
            task: {
                ...createdTask,
                id: createdTask._id
            },
        });
    });
});

router.put('/:id', (req, res, next) => {
    const task = new Task({
        _id: req.body.id,
        name: req.body.name,
        date: req.body.date,
        status: req.body.status,
        description: req.body.description
    });
    console.log(task);
    Task.updateOne({ _id: req.params.id }, task).then(result => {
        res.status(200).json({ message: 'Update Successful!' });
    });
});

router.get('', (req, res, next) => {
    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;
    const taskQuery = Task.find();
    let fetchedTasks;
    if (pageSize && currentPage) {
        taskQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
    }
    taskQuery
        .then(documents => {
            fetchedTasks = documents;
            return Task.countDocuments();
        })
        .then(count => {
            res.status(200).json({
                message: 'Tasks Fetched Successfully!',
                tasks: fetchedTasks,
                maxTasks: count
            });
        });
});

router.get('/:id', (req, res, next) => {
    Task.findById(req.params.id).then(task => {
        if (task) {
            res.status(200).json(task);
        } else {
            res.status(404).json({ message: 'Task Not Found!' });
        }
    });
});

router.delete('/:id', (req, res, next) => {
    Task.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json({ message: 'Task Deleted!' });
    });
});

module.exports = router;