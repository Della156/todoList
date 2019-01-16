import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

Vue.use(
    ElementUI,
    Vuex
)

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
