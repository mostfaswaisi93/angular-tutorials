var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', con: true, anyarray: [10, 20, 30] });
});

module.exports = router;