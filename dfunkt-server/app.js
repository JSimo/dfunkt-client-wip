var express = require('express');
var path = require('path');
var jwt = require('express-jwt');

var api = require('./routes/api');
var login = require('./routes/login');

var app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

// Routes
app.use('/login', allowCrossDomain, login);
app.use('/api', allowCrossDomain, api);
app.use('/', express.static(path.join(__dirname, 'build')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
