'use strict';

var express = require('express');
var router = express.Router();


router.get('/csv/to/json', function (req, res,next) {
  res.send('Welcome');
});

module.exports = exports = router;