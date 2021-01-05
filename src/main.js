import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import './registerServiceWorker'
import VueRouter from 'vue-router'


import VueScrollProgress from 'vue-scroll-progress'
import VueScrollactive from 'vue-scrollactive';

Vue.use(VueScrollactive);

Vue.use(VueScrollProgress);
Vue.use(VueRouter);



Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
