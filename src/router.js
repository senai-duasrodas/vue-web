import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import Cadastros from './views/Cadastros.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/cadastros',
      name: 'cadastros',
      component: Cadastros
    },
    {
      path: '/solicitacoes',
      name: 'Solicitações',
      component: Dashboard
    },
    {
      path: '/consultas',
      name: 'Consultas',
      component: Dashboard
    },
    {
      path: '/relatorios',
      name: 'Relatórios',
      component: Dashboard
    },
    {
      path: '/configuracoes',
      name: 'Configurações',
      component: Dashboard
    }
  ]
})