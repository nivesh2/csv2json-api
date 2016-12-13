
'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const debug = require('debug')('main:app'),
      config = require('./config/config'),
      port = process.env.PORT || config.port;

//start express server
var app = require('./config/express')();

//add middlewares to express
require('./middleware')(app);

//routes
app.use('/convert',require('./app/csv2json'));

//handle errors
require('./app/handleError')(app);

app.listen(port);
debug(`Server running in ${app.get('env')} environment, listening on port: ${port}`);
