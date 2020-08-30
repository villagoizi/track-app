<template>
  <v-card flat>
    <v-toolbar class='cyan' dark fixed>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title class='pointer'>
          <span :to="{ name: 'Home' }">Track App</span>
        </v-toolbar-title>
        <v-btn class='cyan ml-2' :to="{ name: 'Songs' }">Browser</v-btn>
        <v-spacer></v-spacer>
        <v-btn v-if='!$store.state.isLoggedUser' class='cyan mr-2' :to="{ name: 'Login'}">Login</v-btn>
        <v-btn v-if='!$store.state.isLoggedUser' class='cyan' :to="{ name: 'Register' }">Signup</v-btn>
        <v-btn v-if='$store.state.isLoggedUser' class='cyan' @click='logout'>Logout</v-btn>
    </v-toolbar>
  </v-card>
</template>
<script>
export default {
  name: 'Header',
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
<style>
.pointer{
    cursor: pointer;
}
</style>
