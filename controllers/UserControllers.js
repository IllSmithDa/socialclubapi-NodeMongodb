const mongoose = require('mongoose');
const User = require('../models/Usermodel');

const createUser = (req, res) => {
  const { username, password } = req.body;
  const UserObject = new User({ username, password });
  UserObject
    .save()
    .then((createdUser) => {
      res.status(200).json(createdUser);
    })
    .catch((err) => {
      res.status(422).json(err);
      return;
    })
}

const loginUser = (req, res) => {
  const {username, password} = req.body;
  User.findOne({username}, (err, user) => {
    if (err || user === null) {
      res.status(422).json(err);
    }
    if (err || password !== user.password) {
      res.status(422).json(err);
    }
  })
}

module.exports = {
  loginUser,
  createUser
}