'use strict';

/*
 * Streams are used for fast processing.
 * Fetches CSV content from remote url (query string)
 * and converts it into json
 * and streams the json response back to the client
 */

var request = require('request'),
    csv2json = require('csv2json'),
    debug = require('debug')('instarem:convert');

function convert(uri, res, callback){

  request.head(uri, function(err, response, body){

      if(err){
          debug('Error',err);
          return callback(err);
      }

    debug('content-type:', response.headers['content-type']);
    debug('content-length:', response.headers['content-length']);

    //setting response content-type to JSON    
    res.set('Content-Type', 'application/json');

    request(uri).pipe(csv2json({
            separator: ','
        })).pipe(res).on('close', callback);
    });
}

module.exports = exports = function(req,res,next){
    debug('Query URL:',req.query);
    
    convert(req.query.q,res, function(err){
        if(err){
            next(err);
        }
        debug('done');
    });
} 

