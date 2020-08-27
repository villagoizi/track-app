const { User } = require('../models')

module.exports = {
  register: async (req, res) => {
    try {
      const user = await User.create(req.body)
      res.json(user.toJson())
    } catch (e) {
      res.status(400).json({
        error: 'Email already exists'
      })
    }
  }
}
