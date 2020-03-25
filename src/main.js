import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// fonts
import '@/assets/css/main.css';
import '@/assets/css/fonts.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
