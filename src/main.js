import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from '@/plugins/vuetify'
import store from './store'
import * as firebase from 'firebase'

Vue.use(vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  vuetify,
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDxbwyD_dKV-mab41SL98PTmb-yiXl77jc',
      authDomain: 'vue-news-project.firebaseapp.com',
      databaseURL: 'https://vue-news-project.firebaseio.com',
      projectId: 'vue-news-project',
      storageBucket: 'vue-news-project.appspot.com',
      messagingSenderId: '594011914327',
      appId: '1:594011914327:web:fe800462b8eab80197a312',
      measurementId: 'G-KRZ6V37QY5'
    })
    firebase.analytics()
  }
})
