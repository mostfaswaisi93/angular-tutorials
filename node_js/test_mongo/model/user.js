var mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: {
        type: string,
        required: true
    },
    userMail: {
        type: string,
        required: true
    }
});

module.exports = userSchema;