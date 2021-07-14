import Vue from 'vue'
import VueRouter from 'vue-router'
import Currency from '../views/Currency.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Currency',
    component: Currency
  },
  {
    path: '/converter',
    name: 'Converter',
    component: () => import('../views/Converter.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
