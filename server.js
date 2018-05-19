var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var index = require('./routes/index');     This is the route:
var restaurantList = require('./routes/restaurantList');  //.routes/restaurantList = refers to restaurantList.js file name

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index);       Using the route:
app.use('/restaurantList', restaurantList);  //restaurantList refers to var restaurantList = (line 9)

module.exports = app;
