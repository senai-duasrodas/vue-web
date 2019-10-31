import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Fontawesome from '@fortawesome/fontawesome-free/css/all.css'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import {
  BButton
} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Fontawesome)
Vue.use(VueResource)
Vue.use(BootstrapVue);

Vue.component('b-button', BButton)

Vue.config.productionTip = false

new Vue({
  router,
  beforeMount() {
    const apiUrl = 'http://localhost:3000';
    Vue.prototype.$apiUrl = apiUrl;
  },
  render: h => h(App)
}).$mount('#app')