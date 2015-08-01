var GitHubStrategy = require('passport-github').Strategy;
var Config = require("../../../config.js");

module.exports = function(passport) {

    // Passport session setup.
    //   To support persistent login sessions, Passport needs to be able to
    //   serialize users into and deserialize users out of the session.  Typically,
    //   this will be as simple as storing the user ID when serializing, and finding
    //   the user by ID when deserializing.  However, since this example does not
    //   have a database of user records, the complete GitHub profile is serialized
    //   and deserialized.
    passport.serializeUser(function(user, done) {
      console.log("serializeUser", user)
      done(null, user);
    });

    passport.deserializeUser(function(obj, done) {
      console.log("deserailzeObj")
      done(null, obj);
    });


    // Use the GitHubStrategy within Passport.
    //   Strategies in Passport require a `verify` function, which accept
    //   credentials (in this case, an accessToken, refreshToken, and GitHub
    //   profile), and invoke a callback with a user object.
    passport.use(new GitHubStrategy({
        clientID: Config.GITHUB_CLIENT_ID,
        clientSecret: Config.GITHUB_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/github/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        // asynchronous verification, for effect...
        process.nextTick(function () {

          // To keep the example simple, the user's GitHub profile is returned to
          // represent the logged-in user.  In a typical application, you would want
          // to associate the GitHub account with a user record in your database,
          // and return that user instead.
          return done(null, profile);
        });
      }
    ));
}

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
module.exports.ensureAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/')
}
