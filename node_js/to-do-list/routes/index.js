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
        res.render('home', { title: 'Node.js To-Do List', tasks: taskGrid });
    });
});


router.get('/tasks', function(req, res, next) {
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

router.get('/tasks/create', (req, res) => {
    res.render("task/addEdit", {
        viewTitle: "Insert task"
    });
});

router.post('/tasks/create', (req, res) => {
    console.log('hi');
    insertRecord(req, res);

    // if (req.body._id == '')
    //     insertRecord(req, res);
    // else
    //     updateRecord(req, res);
});

function insertRecord(req, res) {
    var task = new Task();
    task.taskName = req.body.taskName;
    task.date = req.body.date;
    task.status = req.body.status;
    task.description = req.body.description;
    task.save((err, doc) => {
        if (!err)
            res.redirect('tasks');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("task/addEdit", {
                    viewTitle: "Insert Task",
                    task: req.body
                });
            } else
                console.log('Error during record insertion : ' + err);
        }
    });
}

function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'taskName':
                body['taskNameError'] = err.errors[field].message;
                break;
            case 'date':
                body['dateError'] = err.errors[field].message;
                break;
            case 'status':
                body['statusError'] = err.errors[field].message;
                break;
            case 'description':
                body['descriptionError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

router.get('/delete/:id', (req, res) => {
    Task.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/task/list');
        } else { console.log('Error in task delete :' + err); }
    });
});


module.exports = router;