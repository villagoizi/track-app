<template>
  <panel title="Login" cols="6">
    <v-form ref='form'>
      <v-text-field v-model='email' type='email' label='Email'></v-text-field>
      <v-text-field v-model='password' type='password' label='Password'></v-text-field>
      <v-alert type='error' v-if='error !== null'>{{this.error}}</v-alert>
      <v-btn color='cyan' dark @click='login'>Login</v-btn>
    </v-form>
  </panel>
</template>

<script>
import Authentication from '@/services/AuthenticationService.js'
import Panel from '@/components/Panel.vue'
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
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({ name: 'Songs' })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>
<style scoped>

</style>
