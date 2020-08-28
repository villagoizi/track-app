const { Router } = require('express')
const router = Router()
const { register, login } = require('../controllers/AuthenticationControllers')
const AuthPolicy = require('../policies/AuthPolicy')

router.post('/register', AuthPolicy.register, register)
router.post('/login', login)

module.exports = router
