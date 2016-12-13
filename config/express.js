'use strict';

module.exports = exports = function(){
    
    //getting instance of Express
    const app = require('express')();
    
    //configure the express instance
    app.set('env',process.env.NODE_ENV);
    
    //disabled for security reasons
    app.disable('x-powered-by');
    
    return app;
};

