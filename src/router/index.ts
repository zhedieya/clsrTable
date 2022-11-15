import { createRouter, createWebHashHistory } from "vue-router"
 
import HelloWorld from '../components/HelloWorld.vue'
import About from '../components/About.vue'
import User from '../components/User.vue'
 
const routes = [
	// router参数详细看下文
	{
		path: "/helloworld",
		name: "helloworld",
		component: HelloWorld
	},
	// {
	// 	path: "/about",
	// 	name: "about",
	// 	component: About
	// },
	// {
	// 	path: "/user/:uid",  // 动态参数
	// 	name: "user",
	// 	component: User
	// }
]
export const router = createRouter({
	history: createWebHashHistory(),
	routes: routes
})
