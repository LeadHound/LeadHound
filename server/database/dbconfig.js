var pg = require('pg');
var userController = require('./collections/userController');
var conString = "postgresql://localhost:5432/leadhounddb";

// var client = new pg.Client(conString);
// client.connect();