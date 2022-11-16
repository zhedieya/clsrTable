import { createRouter, createWebHashHistory } from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import Welcome from '../components/Welcome.vue'

const routes = [
  { path: '/', component: Welcome },
  {
    path: '/helloworld',
    name: 'helloworld',
    component: HelloWorld,
  },
	{
		path: '/clsrtable',
		name: 'clsrtable',
		component: () => import('../components/common/clsrTable/index.vue'),
	}
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})
