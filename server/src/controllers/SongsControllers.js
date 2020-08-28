const { Song } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const song = await Song.findAll({ limit: 10 })
      res.json(song)
    } catch (e) {
      res.status(500).json({
        error: 'Fatal error, try more last'
      })
    }
  },
  async createSong (req, res) {
    try {
      console.log(Song, 'and req.body: ', req.body)
      const song = await Song.create(req.body)
      res.json(song)
    } catch (e) {
      console.log('error:  ', e)
      res.status(500).json({
        error: 'Fatal error trying to create the song, try more last'
      })
    }
  }
}
