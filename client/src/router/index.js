import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Songs from '../components/Songs.vue'
import CreateSong from '../components/CreateSong.vue'
import Song from '../components/Song.vue'
import EditSong from '@/components/EditSong.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/songs',
    name: 'Songs',
    component: Songs
  },
  {
    path: '/songs/add',
    name: 'Song-create',
    component: CreateSong
  },
  {
    path: '/songs/:songId',
    name: 'Song-id',
    component: Song
  },
  {
    path: '/songs/edit/:songId',
    name: 'Song-edit-id',
    component: EditSong
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
