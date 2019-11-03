import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import Fontawesome from '@fortawesome/fontawesome-free/css/all.css'
import BootstrapVue from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Fontawesome)
Vue.use(BootstrapVue);
Vue.use(VueSweetalert2);

Vue.config.productionTip = false

new Vue({
  router,
  beforeMount() {
    const apiUrl = 'http://localhost:3000';
    Vue.prototype.$apiUrl = apiUrl;
  },
  render: h => h(App)
}).$mount('#app')