// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueFire from 'vuefire'
import firebase from 'firebase'
import push from './push'

Vue.use(VueFire)

let config = {
  apiKey: "AIzaSyArBnmtqFTLeYba4dIjbD_r1WnOoYGEc6Q",
  authDomain: "vue-pwa-24ffa.firebaseapp.com",
  databaseURL: "https://vue-pwa-24ffa.firebaseio.com",
  projectId: "vue-pwa-24ffa",
  storageBucket: "",
  messagingSenderId: "1050130004838"
}

firebase.initializeApp(config)

push()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
