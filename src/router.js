import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/home.vue'
import About from './components/about.vue'
import List from './components/list.vue'
/* eslint-disable */
// 使用 router
Vue.use(VueRouter)
// 路由集合
const routes = [
	{
		path:'/home',
		component:Home
	},
	{
		path:'/about',
		component:About
	},
	{
		path:'/list',
		component:List
	}
]
// 实例化router对象
const router = new VueRouter({
	mode:'hash', //设置路由模式 hash history abstract
	routes:routes, //挂载路由集合
	base:'/'
})

// 导出router对象
export default router
/* eslint-enable */
