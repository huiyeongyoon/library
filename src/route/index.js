import Vue from "vue"
import Router from "vue-router"
import _ from "lodash"

// 로딩바
import NProgress from "nprogress"
import "nprogress/nprogress.css"

import Layouts from "@/layouts"
import PageNotFound from "@/views/pageNotFound.vue"

// import homeRouter from '@/layouts'

Vue.use(Router)

// concat 사용법
export const constantRoutes = _.concat(
  // homeRouter,
  {
    path: "/",
    component: Layouts,
  },
  {
    path: "/aboutMe",
    component: () => import("@/views/aboutMe.vue"),
    meta: { title: "aboutMe" },
  },
  {
    path: "/skills",
    component: () => import("@/views/skills.vue"),
    meta: { title: "skills" },
  },
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
