import Vue from 'vue'
import Router  from "vue-router"
import  Login  from "./components/Login"
import  Home  from "./components/Home"
import  Register  from "./components/Register"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', component: Home
    },
    {
      path: '/login', component: Login
    },
    {
      path: '/register', component: Register
    }
  ]
})

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
