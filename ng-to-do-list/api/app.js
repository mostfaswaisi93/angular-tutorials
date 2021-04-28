const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser');

// Load in the mongoose models
const { Task, User } = require('./db/models');

const jwt = require('jsonwebtoken');

/* MIDDLEWARE  */

// Load middleware
app.use(bodyParser.json());

/**
 * GET /tasks
 * Purpose: Get all tasks
 */
app.get('/tasks', (req, res) => {
    Task.find().then((tasks) => {
        res.send(tasks);
    }).catch((e) => {
        res.send(e);
    });
});


// app.get('/tasks', authenticate, (req, res) => {
//     // We want to return an array of all the tasks that belong to the authenticated user 
//     Task.find({
//         _userId: req.user_id
//     }).then((tasks) => {
//         res.send(tasks);
//     }).catch((e) => {
//         res.send(e);
//     });
// });

/**
 * POST /tasks
 * Purpose: Create a task
 */
app.post('/tasks', (req, res) => {
    let taskName = req.body.taskName;
    let newTask = new Task({
        taskName
    });
    newTask.save().then((taskDoc) => {
        res.send(taskDoc);
    });
});

/**
 * PATCH /tasks/:id
 * Purpose: Update a specified task
 */
app.patch('/tasks/:id', (req, res) => {
    // We want to update the specified task (task document with id in the URL) with the new values specified in the JSON body of the request
    Task.findOneAndUpdate({ _id: req.params.id }, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    });
});
// app.patch('/tasks/:id', authenticate, (req, res) => {
//     // We want to update the specified task (task document with id in the URL) with the new values specified in the JSON body of the request
//     Task.findOneAndUpdate({ _id: req.params.id, _userId: req.user_id }, {
//         $set: req.body
//     }).then(() => {
//         res.send({ 'message': 'updated successfully' });
//     });
// });

/**
 * DELETE /tasks/:id
 * Purpose: Delete a task
 */
app.delete('/tasks/:id', (req, res) => {
    // We want to delete the specified task (document with id in the URL)
    Task.findOneAndRemove({
        _id: req.params.id
    }).then((removedTaskDoc) => {
        res.send(removedTaskDoc);
    })
});
// app.delete('/tasks/:id', authenticate, (req, res) => {
//     // We want to delete the specified task (document with id in the URL)
//     Task.findOneAndRemove({
//         _id: req.params.id,
//         _userId: req.user_id
//     }).then((removedTaskDoc) => {
//         res.send(removedTaskDoc);

//         // delete all the tasks that are in the deleted list
//         deleteTasksFromList(removedTaskDoc._id);
//     })
// });

app.listen(3000, () => {
    console.log('Server is listening in port 3000');
});