import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard'
import Cadastros from '../views/Cadastros'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
