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
      const song = await Song.create(req.body)
      res.json(song)
    } catch (e) {
      res.status(500).json({
        error: 'Fatal error trying to create the song, try more last'
      })
    }
  },
  async getSongId (req, res) {
    try {
      const song = await Song.findByPk(req.params.id)
      if (!song) res.status(404).json({ error: 'Song is not exists' })
      res.json(song)
    } catch (e) {
      console.log(e)
      res.status(500).json({
        error: 'Fatal error trying get song, try more last'
      })
    }
  }
}
