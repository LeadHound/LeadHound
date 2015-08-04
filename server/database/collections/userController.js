var sql = require('sql');
var User = require('../models/userModel.js');
var pg = require('pg');
var Client = require('../../app.js');
var pg = require('pg');
var db = require('../dbconfig.js');
var conString = "postgresql://localhost:5432/leadhounddb";


function runQuery(sqlString) {
  //helper function to open and close db connection
  var client = new pg.Client(conString);
  client.connect();
  // console.log("sql query: ", sqlString);
  client.query(sqlString, function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    client.end();
  });
};

module.exports.createTable = function (req, res, next) {
  var createTable = User.create().ifNotExists().toQuery();
  runQuery(createTable);
  res.send("created table succesfully");
};

module.exports.createUser = function(req, res, next) {
  console.log("user req", req.body);
  var user = req.body;
  var insertString = User.insert({
    id: user.id, 
    name: user.name, 
    email: user.email, 
  }).toQuery();
  // console.log("sql query: ", insertString);
  runQuery(insertString);
  res.send('created user succesfully');
};
