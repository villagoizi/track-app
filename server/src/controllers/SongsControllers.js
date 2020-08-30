const { Song } = require('../models')
const { Op } = require('sequelize')

module.exports = {
  async index (req, res) {
    try {
      let song = null
      const search = req.query.search
      if (search) {
        song = await Song.findAll({
          where: {
            [Op.or]: ['title', 'artist', 'album', 'genre'].map(key => ({
              [key]: {
                [Op.like]: [`%${search}%`]
              }
            }))
          }
        })
        // where: { [Op.or]: { title: { [Op.like]: [`%search%`] } } Es lo mismo que esto o SELECT * FROM Song WHERE title = lower(search) OR artist = lower(search) ...
      } else {
        song = await Song.findAll({ limit: 10 })
      }
      console.log('Search', search)
      res.json(song)
    } catch (e) {
      console.log(e)
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
  },
  async editSongId (req, res) {
    try {
      const song = await Song.update(req.body, { where: { id: req.params.id } }, { new: true })
      if (!song) res.status(404).json({ error: 'Song is not exists' })
      res.json(req.body)
    } catch (e) {
      console.log(e)
      res.status(500).json({
        error: 'Fatal error trying get song, try more last'
      })
    }
  }
}
