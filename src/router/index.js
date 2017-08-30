import Vue from 'vue'
import Router from 'vue-router'
import {
  isLogin
} from '../utils/authService'

const Login = () =>
  import ('../components/report/login.vue')
const Myreport = () =>
  import ('../components/report/myreport.vue')
const Wantreport = () =>
  import ('../components/report/wantreport.vue')

Vue.use(Router)

const routes = [{
  path: '/login',
  name: 'Login',
  component: Login,
  meta: {
    requireNotAuth: true,
    title: '登录'
  }
}, {
  path: '/myreport',
  name: 'Myreport',
  component: Myreport,
  meta: {
    requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
    title: '我的报备'
  }
}, {
  path: '/',
  name: 'Wantreport',
  component: Wantreport,
  meta: {
    requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
    title: '我要报备'
  }
}]

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.goTop)) {
    window.scroll(0, 0)
  }
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (!isLogin()) {
      return next({
        path: '/login'
      })
    }
  }
  if (to.matched.some(record => record.meta.requireNotAuth)) {
    if (isLogin()) {
      return next({
        path: '/'
      })
    }
  }
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
