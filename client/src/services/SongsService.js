import Api from '@/services/Api.js'

export default {
  index () {
    return Api().get('/songs')
  },
  create (dataSong) {
    return Api().post('/songs', dataSong)
  },
  getById (id) {
    return Api().get(`/songs/${id}`)
  }
}
