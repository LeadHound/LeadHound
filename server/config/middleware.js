var morgan = require('morgan'); 

module.exports = function(app, express) {
  app.use(morgan('dev')); 

  app.get('/', function(req, res) {
    res.send('home');

  });

  app.get("/login", function(req, res) {
    console.log('login');
    res.send('login called');
  }); 
}; 