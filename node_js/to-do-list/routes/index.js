var express = require('express');
var router = express.Router();

const Task = require('../models/Task');

/* GET home page. */
router.get('/', function(req, res, next) {
    Task.find({}, (error, doc) => {
        if (error) {
            console.log(error);
        }
        var taskGrid = [];
        var colGrid = 3;

        for (var i = 0; i < doc.length; i += colGrid) {
            taskGrid.push(doc.slice(i, i + colGrid))
        }
        res.render('index', { title: 'Node.js To-Do List', tasks: taskGrid });
    });
});

module.exports = router;