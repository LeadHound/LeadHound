var sql = require('sql');

sql.setDialect('postgres');

var userSchema = sql.define({
  "name": 'users',
  "columns": [{
      name: 'id',
      dataType: 'integer'
    },{
      name: 'name',
      dataType: 'varchar(100)'
    },{
      name: 'email',
      dataType: 'varchar(100)'
    }]
});

module.exports = userSchema;
