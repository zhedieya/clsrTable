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
		path: '/usetable',
		name: 'usetable',
		component: () => import('@/components/clsrTable/useTable.vue'),
	},
  {
		path: '/anttree',
		name: 'anttree',
		component: () => import('@/components/antTree/antTree.vue'),
	},
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})
