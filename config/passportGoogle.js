const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const config = require('./config');

module.exports = passport => {
  passport.serializeUser(function(user, done) {
    // if we were to use e.g. DB -> pass user.id in done() below instead of the whole user object
    done(null, user);
  });
  passport.deserializeUser(function(user, done) {
    // here is the place to e.g. find or create newuser in DB based on the google data (User.id)
    done(null, user);
  });

  passport.use(
    new GoogleStrategy(
      {
        clientID: config.GOOGLE_CLIENT_ID,
        clientSecret: config.GOOGLE_CLIENT_SECRET,
        callbackURL: config.CALLBACK_URL
      },
      function(accessToken, refreshToken, profile, cb) {
        googleProfile = {
          id: profile.id,
          displayName: profile.displayName,
          email: profile.emails[0].value,
          profileImg: profile.photos[0].value
        };
        cb(null, googleProfile);
      }
    )
  );
};
