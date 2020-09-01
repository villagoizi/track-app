import Api from '@/services/Api.js'

export default {
  index (params) {
    return Api().get('/bookmark', {
      params: params
    })
  },
  book (params) {
    return Api().post('/bookmark', params)
  },
  unbook (bookmarkId) {
    return Api().get(`/bookmark/${bookmarkId}`)
  }
}
