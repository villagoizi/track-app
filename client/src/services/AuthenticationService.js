import Api from '@/services/Api.js'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// AuthenticationService.register({
//     email: "test@test.com",
//     password: "12345678"
// })
