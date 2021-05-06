const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE, OPTIONS'
    );
    next();
});

app.post('/api/tasks', (req, res, next) => {
    const task = req.body;
    console.log(task);
    res.status(201).json({
        message: 'Task Added Successfully!'
    });
});

app.get('/api/tasks', (req, res, next) => {
    const tasks = [{
            id: 'fadf12421l',
            title: 'First server-side tasks',
            content: 'This is coming from the server'
        },
        {
            id: 'ksajflaj132',
            title: 'Second server-side tasks',
            content: 'This is coming from the server!'
        }
    ];
    res.status(200).json({
        message: 'Tasks Fetched Successfully!',
        tasks: tasks
    });
});

module.exports = app;