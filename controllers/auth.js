const User = require('../models/user')
const jwt = require('jsonwebtoken')

const  { secret } = require('../config/environmental')


function login(req, res) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorized' })
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '24h' })
      res.status(202).json({
        message: `Welcome back top lad`,
        token
      })
    })
    .catch(() => res.status(401).json({ message: 'Unauthorized' }))
}

module.exports = { login }