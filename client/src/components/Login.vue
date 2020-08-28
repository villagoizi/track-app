<template>
  <v-container>
    <v-row justify="center">
      <v-col md="5">
        <div class="white elevation-2">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-form ref="form" class="px-4 py-4 text-center">
            <v-text-field v-model="email" label="Email"></v-text-field>
            <v-text-field v-model="password" label="Password"></v-text-field>
            <v-alert type="error" v-if="error !== null"> {{this.error}} </v-alert>
            <v-btn color="cyan" dark @click="login">Login</v-btn>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>
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
    async login () {
      try {
        const response = await Authentication.login({
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

</style>
