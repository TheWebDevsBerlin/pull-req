const express  = require('express');
const router   = express.Router();
const bcrypt   = require('bcrypt');
const passport = require('passport');
const User     = require('../models/User');

router.post('/signup', (req, res) => {
  const { username, password } = req.body;

  if (!password || password.length < 8) {
    return res
      .status(400)
      .json({ message: 'Your password must be 8 char. min.' });
  }
  if (!username) {
    return res.status(400).json({ message: 'Your username cannot be empty' });
  }

  User.findOne({ username: username })
    .then(found => {
      if (found) {
        return res
          .status(400)
          .json({ message: 'This username is already taken' });
      }

      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(password, salt);

      return User.create({ username: username, password: hash }).then(
        dbUser => {

          req.login(dbUser, err => {
            if (err) {
              return res
                .status(500)
                .json({ message: 'Error while attempting to login' });
            }
            res.json(dbUser);
          });
        }
      );
    })
    .catch(err => {
      res.json(err);
    });
});

router.post('/login', (req, res) => {
  passport.authenticate('local', (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Error while authenticating' });
    }
    if (!user) {
      return res.status(400).json({ message: 'Wrong credentials' });
    }
    req.login(user, err => {
      if (err) {
        return res
          .status(500)
          .json({ message: 'Error while attempting to login' });
      }
      return res.json(user);
    });
  })(req, res);
});

router.delete('/logout', (req, res) => {
  req.logout();
  res.json({ message: 'Successful logout' });
});

// returns the logged in user
router.get('/loggedin', (req, res) => {
  res.json(req.user);
});

router.get('/github', passport.authenticate('github'));

router.get('/github/callback', (req,res) => {
  // passport.authenticate('github', {
  //   successRedirect: '/github/success',
  //   failureRedirect: '/github/failed'
  // })

  console.log('server auth.js');
  passport.authenticate('github', (err, user) => {
    if (err) return res.status(500).json({ message: 'Error while authenticating' });
    if (!user) return res.status(400).json({ message: 'Wrong credentials' });
    req.login(user, err => {
      if (err) return res.status(500).json({ message: 'Error while attempting to login' });
      return res.redirect('http://localhost:3000');
    });
  })(req, res);
});

router.get('/github/failed', (req, res) => {
  console.log('failed');
  res.status(401).json({ message: 'github failed'})
})

router.get('/github/success', (req, res) => {
  console.log('success');
  res.status(200).json({ message: 'github success'})
})

module.exports = router;