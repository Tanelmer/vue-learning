// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
// 路由器会创建一个App实例，并且挂载到ID为app的dom上
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
