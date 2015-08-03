// client.query("CREATE TABLE IF NOT EXISTS emps(firstname varchar(64), lastname varchar(64))");
// client.query("INSERT INTO emps(firstname, lastname) values($1, $2)", ['Ronald', 'McDonald']);
// client.query("INSERT INTO emps(firstname, lastname) values($1, $2)", ['Mayor', 'McCheese']);
//
// var query = client.query("SELECT firstname, lastname FROM emps ORDER BY lastname, firstname");
// query.on("row", function (row, result) {
//     result.addRow(row);
// });
// query.on("end", function (result) {
//     console.log(JSON.stringify(result.rows, null, "    "));
//     client.end();
// });

var sql = require('sql');
// var Client = require('../../app.js');
//
// sql.setDialect('postgres');
//
//
// var user = sql.define({
//   "name": 'user',
//   "columns": ['id', 'name', 'email', 'lastLogin']
// }).create();
//
// console.log('user table', user);
//
// var insertStatement = user.insert({
//   "id": 1,
//   "name": "timur",
//   "email": "timur@aol.com"
//   }).toQuery();
// console.log("insert statement", insertStatement)

// Client.query("CREATE TABLE IF NOT EXISTS emps(firstname varchar(64), lastname varchar(64))");

var userTableString = "CREATE TABLE IF NOT EXISTS users(id integer, name varchar(64),email varchar(64))";
// console.log("client", Client);
// Client.query(userTableString);


module.exports = {
  userTableString: userTableString
}
