import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Menu from '@/components/Menu'
import User from '@/components/User'
import About from '@/components/About'
import Content from '@/components/Content'
import Cust from '@/components/Cust'
import Pro from '@/components/Pro'
import Info from '@/components/Info'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		},
		{
			path: '/cust',
			name: 'Cust',
			component: Cust
		},
		{
			path: '/pro',
			name: 'Pro',
			component: Pro
		},
		{
			path: '/about',
			name: 'About',
			component: About
		},
		{
			path: '/info',
			name: 'Info',
			component: Info
		},
		{
			path: '/user',
			name: 'User',
			component: User
		}
	]
})
