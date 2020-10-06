const User = require('../models/User');
// const LocalStrategy = require('passport-local').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
// const bcrypt = require('bcrypt'); // !!!
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
            return User.create({
              githubId: profile.id,
              displayName: profile.displayName,
              username: profile.username,
              login: profile._json.login,
              avatar_url: profile._json.avatar_url,
              html_url: profile._json.html_url,
              company: profile._json.company,
              blog: profile._json.blog,
              location: profile._json.location,
              created_at: profile._json.created_at
            })
              .then(dbUser => {
                done(null,dbUser);
              });
          }
        })
        .catch(error => done(error));
    }
));

module.exports=passport;