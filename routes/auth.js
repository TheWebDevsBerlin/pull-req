const express  = require('express');
const router = express.Router();
const passport = require('passport');

router.delete('/logout', (req, res) => {
  req.session.destroy(function (err) {
    res.json({ message: 'Successful logout' });
  });
});

// returns the logged in user
router.get('/loggedin', (req, res) => {
  res.json(req.user);
});

router.get('/github', passport.authenticate('github'));

let partner_id = '';

router.get('/user/:id', (req, res) => {
  console.log('user id', req.params.id);
  partner_id = req.params.id;
  res.redirect('/api/auth/github');
});

router.get('/github/callback', (req,res) => {
  passport.authenticate('github', (err, user) => {
    if (err) return res.status(500).json({ message: 'Error while authenticating' });
    if (!user) return res.status(400).json({ message: 'Wrong credentials' });

    req.login(user, err => {
      if (err) return res.status(500).json({ message: 'Error while attempting to login' });

      if (partner_id) {
        return res.redirect(`${process.env.API_CLIENT_URL}/chat/${partner_id}`);
      }
      return res.redirect(`${process.env.API_CLIENT_URL}`);
    });
  })(req, res);
});

module.exports = router;