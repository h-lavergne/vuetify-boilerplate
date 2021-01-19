import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";
import ErrorPage from "../views/ErrorPage";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: "**",
    component: ErrorPage
  }
]

const router = new VueRouter({
  routes
})

export default router
