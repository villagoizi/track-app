import Api from '@/services/Api.js'

export default {
  index (value) {
    return Api().get('/songs', {
      params: {
        search: value
      }
    })
  },
  create (dataSong) {
    return Api().post('/songs', dataSong)
  },
  getById (id) {
    return Api().get(`/songs/${id}`)
  },
  editSong (id, dataSong) {
    return Api().put(`/songs/${id}`, dataSong)
  }
}
