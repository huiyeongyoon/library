import "@/assets/css/style.scss"

import Vue from "vue"

import { sync } from "vuex-router-sync" // 너 뭐하는애니??
import Axios from "axios"

import App from "./App.vue"
import router from "./route" // 이거 쫌 어렵네?
import store from "./store"

// https://materialdesignicons.com/ 사이트
import mdiVue from "mdi-vue"
import * as mdijs from "@mdi/js"

// import * as filters from "./filters/inedx"
// import { func } from "./function/index"

import ElementUI from "element-ui"
import localeKo from "element-ui/lib/locale/lang/ko"

import VueLodash from "vue-lodash"
import lodash from "lodash"

import vueMoment from "vue-moment"
import moment from "moment"

Vue.config.productionTip = false
Vue.config.devtools = true

// 왜돌리는지 고민
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// }) //  ????

Vue.use(mdiVue, { icons: mdijs })

Vue.use(ElementUI)

Vue.use(ElementUI, {
  locale: localeKo,
  size: "medium",
})

Vue.use(vueMoment, { moment })
Vue.use(VueLodash, { name: "ld", lodash: lodash })

Vue.prototype.$http = Axios // http 통신이랑 관계있을 듯
// Vue.prototype.$func = func // prototype을 공부 해봐야 할듯

sync(store, router) // sync??

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app")

// 나중에 구현해보자
// import DlgDraggable from 'vue-element-dialog-draggable'

// Vue.use(DlgDraggable, {
//   containment: true, //Constrains dragging to within the bounds of the window.  Default: false.
// })
