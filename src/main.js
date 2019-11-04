import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import Fontawesome from '@fortawesome/fontawesome-free/css/all.css'
import BootstrapVue from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import validate from './utils/user-validation'


Vue.use(Fontawesome)
Vue.use(BootstrapVue);
Vue.use(VueSweetalert2);

Vue.config.productionTip = false

new Vue({
  router,
  async beforeMount() {
    const apiUrl = 'http://localhost:3000';
    Vue.prototype.$apiUrl = apiUrl;
    try {
      const response = await validate.validate(apiUrl)
      console.log('sucess: ', response);
    } catch (err) {
      console.log('error: ', err);
      localStorage.removeItem('token');
      console.log(this.$route);
      if (this.$route.name === 'login') return
      router.replace('login')
      Swal.fire({
        type: 'error',
        title: 'Sessão inválida, por favor, efetue login!'
      })
    }
  },
  render: h => h(App)
}).$mount('#app')