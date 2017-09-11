'use strict';

module.exports = function(app){
    var equalizer = require('../controllers/equalizerController');

    app.route('/')
    .post(equalizer.equalize);



    app.use(function(req, res,next) {
  res.status(404).send({url: req.originalUrl + ' not found'});
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // next();
});
};