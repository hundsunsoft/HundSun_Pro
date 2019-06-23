<template>
	<div id="app">
		<!-- 		<div class="container-scroller">
			<NavBar></NavBar>
			<SideBar></SideBar>
			<div class="main-panel">
				<Content></Content>
			</div>
		</div> -->

		<div class="container-scroller">
			<!-- partial:partials/_navbar.html -->
			<NavBar></NavBar>
			<!-- partial -->
			<div class="container-fluid page-body-wrapper">
				<!-- partial:partials/_sidebar.html -->
				<SideBar></SideBar>
				<!-- partial -->
				<div class="main-panel">
					<router-view />
					<!-- <Content></Content> -->
					<!-- content-wrapper ends -->
					<!-- partial:partials/_footer.html -->
					<Footer></Footer>
					<!-- partial -->
				</div>
				<!-- main-panel ends -->
			</div>
			<!-- page-body-wrapper ends -->
		</div>
		<!-- <router-view /> -->
	</div>
</template>

<script>
	import NavBar from '@/components/NavBar'
	import SideBar from '@/components/SideBar'
	// import Content from '@/components/Content'
	// import Cust from '@/components/Cust'
	// import Pro from '@/components/Pro'
	import Footer from '@/components/Footer'
	// import About from '@/components/About'
	export default {
		name: 'App',
		// created() {
		// 	const html = document.documentElement // returns the html tag
		// 	html.setAttribute('lang', 'zh')
		// },
		components: {
			NavBar,
			SideBar,
			// Content,
			Footer,
			// Cust,
			// Pro,
			// About
		},
		metaInfo: {
			title: 'EIS2.0',
			titleTemplate: '%s - by hundsunsoft',
			htmlAttrs: {
				lang: 'zh'
			},
			script: [{
				// innerHTML: 'console.log("hello hello!")',
				type: 'text/javascript'
			}],
			__dangerouslyDisableSanitizers: ['script']
		}
	}
	// import './assets/vendors/js/vendor.bundle.base.js'
	// import './assets/vendors/js/vendor.bundle.addons.js'
	// import './assets/js/off-canvas.js'
	// import './assets/js/misc.js'
	// import './assets/js/dashboard.js'
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		/* margin-top: 60px; */
	}
</style>
<!-- <style scoped>
	@import '../static/index.css';
	@import '../static/style.css';
</style> -->