import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './assets/styles/global.styl';
import './assets/styles/footer.styl';

Vue.config.productionTip = false;


const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount(root);
