import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import Fontawesome from '@fortawesome/fontawesome-free/css/all.css'
import BootstrapVue from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2'
import Swal from 'sweetalert2'
import Lodash from 'lodash'
import Http from './utils/http'
import { validate } from './utils/user-validate';

import 'sweetalert2/dist/sweetalert2.min.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Fontawesome);
Vue.use(Lodash);
Vue.use(BootstrapVue);
Vue.use(VueSweetalert2);

Vue.config.productionTip = false

new Vue({
  router,
  async beforeMount() {
    Vue.prototype.$apiUrl = router.options.apiUrl;
    Vue.prototype.$_ = Lodash;
    Vue.prototype.$http = new Http();

    try {
      if (router.currentRoute.name === 'login' || router.currentRoute.name === '404') return;

      await validate(router.options.apiUrl);
    } catch (err) {
      console.log(err);
      localStorage.removeItem('token');
      if (err.err.name === 'TokenExpiredError') return router.replace('/');

      Swal.fire({
        type: 'warning',
        title: `Erro ao autentizar! Por favor, tente novamente.`,
      })
      router.replace('/');
    }
    
  },
  render: h => h(App)
}).$mount('#app')