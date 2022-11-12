import App from './App'

// #ifndef VUE3
import Vue from 'vue'
// import uView from '@/uni_modules/uview-ui'
// import xtoast from '@/components/x-toast'
// Vue.use(xtoast)
// import xView from '@/uni_modules/xview-ui'
// Vue.use(uView)
// Vue.use(xView)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif