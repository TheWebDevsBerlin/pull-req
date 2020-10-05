const User = require('../models/User');
const LocalStrategy = require('passport-local').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const bcrypt = require('bcrypt'); // !!!
const passport = require('passport');

passport.serializeUser((user, done)=>{
  done(null, user);
});

passport.deserializeUser((id, done)=>{
  User.findById(id)
  .then(dbUser => {
    done(null, dbUser);
  })
  .catch(error => {
    done(error);
  });
});

passport.use(
  new LocalStrategy((username, password, next) => {
    User.findOne({ username }, (err, foundUser) => {
      if (err) {
        next(err);
        return;
      }

      if (!foundUser) {
        next(null, false, { message: 'Incorrect username.' });
        return;
      }

      if (!bcrypt.compareSync(password, foundUser.password)) {
        next(null, false, { message: 'Incorrect password.' });
        return;
      }

      next(null, foundUser);
    });
  })
);

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: `/api/auth/github/callback`
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ githubId: profile.id })
        .then(found => {
          if(found !== null) {
            done(null, found);
          } else {
            return User.create({githubId: profile.id})
              .then(dbUser => {
                done(null,dbUser);
              });
          }
        })
        .catch(error => done(error));
    }
));

module.exports=passport;