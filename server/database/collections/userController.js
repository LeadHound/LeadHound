var sql = require('sql');
var User = require('../models/userModel.js');
var Client = require('../../app.js');

sql.setDialect('postgres');


var user = sql.define({
  name: 'user',
  columns: ['id', 'name', 'email', 'lastLogin']
})

module.exports.insertUser = function() {
  var insertStatement = user.insert({
    "id": 1,
    "name": "timur",
    "email": "timur@aol.com"
    }).toQuery();

  console.log("insert statement", insertStatement)
    Client.query(insertStatement);
}

module.exports.createUser = function() {
  console.log("inside createUser")
  var insertStatement = user.select(user.star()).from(user).toQuery();
  console.log(insertStatement.text);
  // Client.query(insertStatement);
}
