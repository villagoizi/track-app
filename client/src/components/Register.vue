<template>
  <div>
      <h1>Register</h1>
      <!-- /* eslint-disable */ -->
    <input type="email" name="email" v-model="email" placeholder="email" /><br>
    <input type="password" name="password" v-model="password" placeholder="Password" /><br>
    <button @click="register">Register</button>
    <div class="error" v-html="error" />
  </div>
</template>

<script>
import Authentication from '@/services/AuthenticationService.js'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await Authentication.register({
          email: this.email,
          password: this.password
        })
        console.log(response)
      } catch (error) {
        this.error = error.response.data.message
      }
    }
  }
}
</script>
<style scoped>
.error{
  color: red;
}
</style>
