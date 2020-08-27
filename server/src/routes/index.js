const { Router } = require('express')
const router = Router()
const { register } = require('../controllers/AuthenticationControllers')
const AuthPolicy = require('../policies/AuthPolicy')

router.post('/register', AuthPolicy.register, register)

module.exports = router
