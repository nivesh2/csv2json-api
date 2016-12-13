'use strict';
/**
 * Adding various middleware to app
 */

module.exports = function(app){
    
    const logger = require('morgan');
    const cors = require('cors');
    //logs incoming request in dev pattern 
    app.use(logger('dev'));
    app.use(cors());
};


