const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose');

// Load in the mongoose models
const { List, Task, User } = require('./db/models');

const jwt = require('jsonwebtoken');


/* MIDDLEWARE  */

// Load middleware
app.use(bodyParser.json());




app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});