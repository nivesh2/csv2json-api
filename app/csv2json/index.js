'use strict';

/* 
 * routing module for this feature
 */
var express = require('express');
var router = express.Router();

router.get('/csv/to/json',require('./convert'));

module.exports = exports = router;