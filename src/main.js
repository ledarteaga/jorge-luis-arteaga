import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VuePageTransition from 'vue-page-transition'

// As a plugin
import VuePrlx from 'vue-prlx'
Vue.use(VuePrlx);

Vue.use(VuePageTransition)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
