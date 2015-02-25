/*
* * Module dependencies
* */

var config = require('./config/config');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');


var app = express(); // sets up the server


mongoose.connect(config.db);




app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// setting up passport authentication

require('./routes/routes')(app);

app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

console.log("example is now running");
app.listen(3000);
