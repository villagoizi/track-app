const { Router } = require('express')
const router = Router()
const { register, login } = require('../controllers/AuthenticationControllers')
const { index, createSong, getSongId, editSongId } = require('../controllers/SongsControllers')
const { getBookmark, addBookmark, deleteBookmark } = require('../controllers/BookmarkControllers')
const AuthPolicy = require('../policies/AuthPolicy')

router.post('/register', AuthPolicy.register, register)
router.post('/login', login)
router.get('/songs', index)
router.post('/songs', createSong)
router.get('/songs/:id', getSongId)
router.put('/songs/:id', editSongId)

router.get('/bookmark', getBookmark)
router.post('/bookmark', addBookmark)
router.get('/bookmark/:bookmarkId', deleteBookmark)

module.exports = router
