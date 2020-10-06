const express  = require('express');
const router = express.Router();
const passport = require('passport');
// const bcrypt   = require('bcrypt');
// const User     = require('../models/User');

router.delete('/logout', (req, res) => {
  req.session.destroy(function (err) {
    res.json({ message: 'Successful logout' });
  });
});

// returns the logged in user
router.get('/loggedin', (req, res) => {
  console.log(req.user);
  res.json(req.user);
});

router.get('/github', passport.authenticate('github'));

router.get('/github/callback', (req,res) => {
  passport.authenticate('github', (err, user) => {
    if (err) return res.status(500).json({ message: 'Error while authenticating' });
    if (!user) return res.status(400).json({ message: 'Wrong credentials' });

    req.login(user, err => {
      if (err) return res.status(500).json({ message: 'Error while attempting to login' });
      return res.redirect('http://localhost:3000');
    });
  })(req, res);
});

module.exports = router;