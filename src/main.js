import Vue from 'vue'
import App from './App.vue'
//引入element-ui
import ElementUI from 'element-ui'
//引入elementui样式
import 'element-ui/lib/theme-chalk/index.css'
//引入router路由
import VueRouter from 'vue-router'
//引入路由器
import router from './router/index'



//使用elementui
Vue.use(ElementUI)
//使用VueRouter
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
