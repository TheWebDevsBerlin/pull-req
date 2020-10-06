const express = require('express')
const router = express.Router();
const User = require("../models/User")
const Message = require("../models/Message")

router.get('/users', (req, res) => {
  User.find({}).then(data => {
    return res.json(data)
  }).catch(err => res.json(err))
});

router.get('/auth', (req, res) => {
  return res.json(req.session.user)
});

router.get('/messages', (req, res) => {
  Message.find({})
    .populate('by')
    .populate('to')
    .then(data => {
      console.log('GET message:', data)
    return res.json(data)
  }).catch(err => res.json(err))
});

router.post('/messages', (req, res) => {
  const { to, by, message } = req.body
  console.log({ to, by, message });

  Message.create({ to, by, content: message }).then(data => {
    return res.json(data)
  }).catch(err => res.json(err))
});

module.exports = router;