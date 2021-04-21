var express = require('express');
var router = express.Router();

const Product = require('../models/Product');

/* GET home page. */
router.get('/', function(req, res, next) {
    Product.find({}, (error, doc) => {
        if (error) {
            console.log(error)
        }
        var productGrid = [];
        var colGrid = 3;

        for (var i = 0; i < doc.length; i += colGrid) {
            productGrid.push(doc.slice(i, i + colGrid))
        }
        res.render('index', { title: 'Shopping-cart', products: productGrid });
    })
});

module.exports = router;