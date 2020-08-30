const { Router } = require('express')
const router = Router()
const { register, login } = require('../controllers/AuthenticationControllers')
const { index, createSong, getSongId } = require('../controllers/SongsControllers')
const AuthPolicy = require('../policies/AuthPolicy')

router.post('/register', AuthPolicy.register, register)
router.post('/login', login)
router.get('/songs', index)
router.post('/songs', createSong)
router.get('/songs/:id', getSongId)

module.exports = router
