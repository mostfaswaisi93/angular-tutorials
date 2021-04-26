const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Task = mongoose.model('task');

router.get('/', (req, res) => {
    res.render("task/addEdit", {
        viewTitle: "Insert task"
    });
});

router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
    else
        updateRecord(req, res);
});


function insertRecord(req, res) {
    var task = new Task();
    task.fullName = req.body.fullName;
    task.email = req.body.email;
    task.mobile = req.body.mobile;
    task.city = req.body.city;
    task.save((err, doc) => {
        if (!err)
            res.redirect('task/list');
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

function updateRecord(req, res) {
    Task.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('task/list'); } else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("task/addEdit", {
                    viewTitle: 'Update Task',
                    task: req.body
                });
            } else
                console.log('Error during record update : ' + err);
        }
    });
}


router.get('/list', (req, res) => {
    Task.find((err, docs) => {
        if (!err) {
            res.render("task/list", {
                list: docs
            });
        } else {
            console.log('Error in retrieving task list :' + err);
        }
    });
});


function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'fullName':
                body['fullNameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

router.get('/:id', (req, res) => {
    Task.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("task/addEdit", {
                viewTitle: "Update Task",
                task: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Task.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/task/list');
        } else { console.log('Error in task delete :' + err); }
    });
});

module.exports = router;