﻿'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function (req, res) {
    res.json({ title: 'Express' });
});

module.exports = router;
