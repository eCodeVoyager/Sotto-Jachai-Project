// - npm packages
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const passportKeys = require('./passportKeys');
const userService = require('../modules/users/services/userService');

/**
 * Configures passport to authenticate users using Google and Facebook strategies.
 *
 */

// Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: passportKeys.googleClientID,
      clientSecret: passportKeys.googleClientSecret,
      callbackURL: `${passportKeys.server_URL}/api/v1/auth/google/callback`
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const googleId = profile.id;
        let user = await userService.getUnprotectedUser({ googleId });

        if (!user) {
          user = await userService.createUser({
            googleId,
            name: profile.displayName,
            email: profile.emails[0].value
          });
        }

        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);

