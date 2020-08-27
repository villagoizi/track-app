const Joi = require('joi')

module.exports = {
  register: (req, res, next) => {
    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,32}$'))
    })
    const { error } = schema.validate(req.body)
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).json({
            error: true,
            message: 'Email is invalid, please write correctly'
          })
          break
        case 'password':
          res.status(400).json({
            error: true,
            message: 'Password sholud contain lowercase,upercase. It must be at least 8 characters in length and not greater than 32 characters in length'
          })
          break
        default:
          res.status(400).json({
            error: true,
            message: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  }
}
