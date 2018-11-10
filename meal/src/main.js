// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyA-XC8F0xickbCr6psDufUtAxXAgB4py0c",
  authDomain: "meal-1d742.firebaseapp.com",
  databaseURL: "https://meal-1d742.firebaseio.com",
  projectId: "meal-1d742",
  storageBucket: "meal-1d742.appspot.com",
  messagingSenderId: "108837537118"
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

export default firebase.firestore();