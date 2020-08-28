<template>
  <v-card flat>
    <v-toolbar class="cyan" dark fixed>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title class="pointer">
          <span @click="navigateTo({name: 'Home'})">Track App</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="cyan mr-2" @click="navigateTo({name: 'Login'})">Login</v-btn>
        <v-btn class="cyan" @click="navigateTo({name: 'Register'})">Signup</v-btn>
    </v-toolbar>
  </v-card>
</template>
<script>
export default {
  name: 'Header',
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
<style>
.pointer{
    cursor: pointer;
}
</style>
