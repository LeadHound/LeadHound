var sql = require('sql');
var User = require('../models/userModel.js');
var Util = require('../util.js');
var pg = require('pg');
var conString = "postgresql://localhost:5432/leadhounddb";
var pgClient = new pg.Client(conString);

module.exports.createUser = function(req, res, next) {
  console.log("user req", req.body);
  var userObj = req.body;
  var createUserString = Util.insert(User, userObj);
  // console.log("sql query: ", createUserString);
  Util.runQuery(pgClient, createUserString);
  res.send('created user succesfully');
};
