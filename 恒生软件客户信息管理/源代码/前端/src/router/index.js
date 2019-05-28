import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Menu from '@/components/Menu'
import User from '@/components/User'
import About from '@/components/About'
import CustInfo from '@/components/CustInfo'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		},
		{
			path: '/menu',
			name: 'Menu',
			component: Menu
		},
		{
			path: '/user',
			name: 'User',
			component: User
		},
		{
			path: '/about',
			name: 'About',
			component: About
		},
		{
			path: '/customer',
			name: 'CustInfo',
			component: CustInfo
		},
	]
})
