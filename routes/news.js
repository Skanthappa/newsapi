'use strict';
var express = require('express');
var router = express.Router();
var newsContoller= require('../controller/newsController');

/* GET news listing. */
router.get('/', function (req, res) {
    res.json("try subroutes");
})

router.get('/newsHeadLine', newsContoller.getNewsHeadline);

module.exports = router;
