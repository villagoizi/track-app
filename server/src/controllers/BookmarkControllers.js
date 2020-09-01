const { Bookmark } = require('../models')
// const { Op } = require('sequelize')

module.exports = {
  async getBookmark (req, res) {
    try {
      const { songId, userId } = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      res.json(bookmark)
    } catch (e) {
      console.log(e)
      res.status(500).json({
        error: 'Fatal error trying to create the song, try more last'
      })
    }
  },
  async addBookmark (req, res) {
    try {
      const { songId, userId } = req.body
      const [bookmark, created] = await Bookmark.findOrCreate({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      if (!created) {
        res.status(400).json({
          error: 'You already have this set as a bookmark'
        })
      }
      res.json(bookmark, created)
    } catch (e) {
      console.log(e)
      res.status(500).json({
        error: 'Fatal error trying to create the song, try more last'
      })
    }
  },
  async deleteBookmark (req, res) {
    try {
      const bookmark = await Bookmark.destroy({
        where: {
          id: req.params.bookmarkId
        }
      })
      res.json(bookmark)
    } catch (e) {
      console.log(e)
      res.status(500).json({
        error: 'Fatal error trying to create the song, try more last'
      })
    }
  }
}
