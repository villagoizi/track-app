const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_DAY = 60 * 60 * 24
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_DAY
  })
}

module.exports = {
  register: async (req, res) => {
    try {
      const user = await User.create(req.body)
      const userJSON = user.toJSON()
      res.json({
        user: userJSON,
        token: jwtSignUser(userJSON)
      })
    } catch (e) {
      res.status(400).json({
        error: 'Email already exists'
      })
      console.error(e)
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body
    try {
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(403).json({
          error: 'Email is not registered'
        })
      }
      const matchPassword = await user.comparePassword(password)
      if (!matchPassword) {
        return res.status(403).json({
          error: 'Password is incorrect'
        })
      }
      const userJSON = user.toJSON()
      res.json({
        user: userJSON,
        token: jwtSignUser(userJSON)
      })
    } catch (e) {
      res.status(500).json({
        error: 'Fatal error, failed authentication'
      })
    }
  }
}
