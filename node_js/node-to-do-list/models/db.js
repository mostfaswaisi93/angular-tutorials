const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/tasksdb', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (!error) {
        console.log('Connected DB...');
    } else {
        console.log('Error in DB Connection! ' + error);
    }
});

require('./task.model');