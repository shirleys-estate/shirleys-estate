import Vue from 'vue'

import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)

import App from './App.vue'
import router from './router'

import FontAwesomeIcon from './assets/fontawesome';
Vue.component('font-awesome-icon', FontAwesomeIcon);

import firebase from 'firebase/app';
import config from './config';
firebase.initializeApp(config);

Vue.config.productionTip = false;

Vue.filter('currency', value => {
  let val = (value/1).toFixed(2);
  return '$' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

Vue.directive('focus', {
	// When the bound element is inserted into the DOM...
	inserted: function (el) {
	// Focus the element
		el.focus();
	}
});

firebase.auth().onAuthStateChanged(() => {
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app');
});


