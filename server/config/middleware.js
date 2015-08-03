var morgan = require('morgan'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    cookieParser = require('cookie-parser'),
    expressSession = require('cookie-session');
    authController = require('../api/auth/authController');

module.exports = function(app, express) {

  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(expressSession({secret: 'secret'}));
  app.use(passport.initialize());
  app.use(passport.session());
  authController(passport);

  app.get('/auth/github', passport.authenticate('github'));

  app.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.cookie('user', JSON.stringify(req.user.id)).redirect('/');
    });

  app.all("*", authController.ensureAuthenticated);
  app.get('/', authController.ensureAuthenticated);
};
