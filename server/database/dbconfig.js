var pg = require('pg');
var UserModel = require('./models/userModel');

var conString = "postgresql://tmeyster@localhost:5432/leadhounddb";

var client = new pg.Client(conString);
client.connect();

console.log("user table created", UserModel.userTableString);
client.query(UserModel.userTableString);
