import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard'
import Cadastros from '../views/Cadastros'
import Login from '../views/Login'
import CadastroEquipamento from '../views/CadastroEquipamento'
import CadastroLocalInstalacao from '../views/CadastroLocalInstalacao'

import validate from '../utils/user-validation';
import Swal from 'sweetalert2'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    beforeEnter(to, from, next) {
      if (!localStorage.getItem('token')) return next();
      return next('/dashboard');
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { requireAuth: true }
  },
  {
    path: '/cadastros',
    name: 'cadastros',
    component: Cadastros,
    meta: { requireAuth: true }
  },
  {
    path: '/solicitacoes',
    name: 'solicitacoes',
    component: Dashboard,
    meta: { requireAuth: true }
  },
  {
    path: '/consultas',
    name: 'consultas',
    component: Dashboard,
    meta: { requireAuth: true }
  },
  {
    path: '/relatorios',
    name: 'relatorios',
    component: Dashboard,
    meta: { requireAuth: true }
  },
  {
    path: '/configuracoes',
    name: 'configuracoes',
    component: Dashboard,
    meta: { requireAuth: true }
  },
  {
    path: '/cadastro-equipamento',
    name: 'equipamento',
    component: CadastroEquipamento,
    meta: { requireAuth: true }
  },
  {
    path: '/cadastro-local-instalacao',
    name: 'Local Instalação',
    component: CadastroLocalInstalacao,
    meta: { requireAuth: true }
  }
]

const apiUrl = 'http://localhost:3000';

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  apiUrl
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.requireAuth) {
    try {
      const response = await validate(apiUrl)
      console.log('sucess: ', response);
      next();
    } catch (err) {
      console.log('error: ', err);
      localStorage.removeItem('token');
      Swal.fire({
        type: 'warning',
        title: 'Erro ao autentizar! Por favor, entre novamente!',
      })
      next('/');
    }
  } else next();
});

export default router
