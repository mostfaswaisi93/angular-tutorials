const express = require('express');

const app = express();

app.use((req, res) => {
    res.json({
        message: 'express working',
        success: 'true'
    })
})

module.exports = app;