import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from '@/store/store.js'
import VueYoutube from 'vue-youtube'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
Vue.use(VueYoutube)
new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
