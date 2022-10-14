import Vue from "vue"
import Router from "vue-router"
import _ from "lodash"

// 로딩바
import NProgress from "nprogress"
import "nprogress/nprogress.css"

import PageNotFound from "@/views/pageNotFound.vue"

// import homeRouter from './modules/home'

Vue.use(Router)

// concat 사용법
export const constantRoutes = _.concat(
  // homeRouter,
  {
    path: "/",
    component: PageNotFound,
  },
  // {
  //   path: "/login",
  //   component: () => import("@/views/home/login"),
  //   meta: { title: "로그인" },
  // },
  { path: "*", component: PageNotFound }
)

const createRouter = () =>
  new Router({
    mode: "history", // require service support
    base: process.env.BASE_URL,
    scrollBehavior: () => {
      document.querySelector("body").scrollTop = 0
    },
    routes: constantRoutes,
  })

const router = createRouter()

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  next()
})

router.afterEach(async () => {
  NProgress.done()
})

export default router
