const express = require('express')
const router = express.Router();
const User = require("../models/User")
const Message = require("../models/Message")

router.get('/users/:by', async (req, res) => {
  const myMessages = await Message.find({ by: req.params.by })
  const users = [...new Set(
    myMessages
      .map(item => JSON.parse(JSON.stringify(item.to)))
      .filter(item => item != 'null')
  )];
  User.find({ _id: { $in: users } }).then(data => {
    return res.json(data)
  }).catch(err => res.json(err))
});

router.get('/users', (req, res) => {
  User.find({}).then(data => {
    return res.json(data)
  }).catch(err => res.json(err))
});

router.get('/auth', (req, res) => {
  return res.json(req.session.user)
});

router.get('/messages/:byUser/:toUser', (req, res) => {
  const { byUser, toUser } = req.params;
  Message.find({ $or: [{ by: byUser, to: toUser }, { by: toUser, to: byUser }] })
    .populate('by')
    .populate('to')
    .then(data => {
      return res.status(200).json(data)
    }).catch(err => res.status(500).json(err))
});

router.post('/messages', (req, res) => {
  const { to, by, message } = req.body

  Message.create({ to, by, content: message }).then(data => {
    return res.json(data)
  }).catch(err => res.json(err))
});

module.exports = router;