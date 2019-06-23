<template>
	<div>
		<nav class="sidebar sidebar-offcanvas" id="sidebar">
			<ul class="nav">
				<li class="nav-item nav-profile">
					<a href="../assets/#" class="nav-link">
						<div class="nav-profile-image">
							<img src="../assets/images/faces/face1.jpg" alt="profile">
							<span class="login-status online"></span>
						</div>
						<div class="nav-profile-text d-flex flex-column">
							<span class="font-weight-bold mb-2">David Grey. H</span>
							<span class="text-secondary text-small">Project Manager</span>
						</div>
						<i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
					</a>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/cust">
						<span class="menu-title">客户资料</span>
						<i class="mdi mdi-home menu-icon"></i>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/pro">
						<span class="menu-title">项目情况</span>
						<i class="mdi mdi-contacts menu-icon"></i>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/about">
						<span class="menu-title">Forms</span>
						<i class="mdi mdi-format-list-bulleted menu-icon"></i>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/Info">
						<span class="menu-title">Info</span>
						<i class="mdi mdi-chart-bar menu-icon"></i>
					</router-link>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="../assets/pages/tables/basic-table.html">
						<span class="menu-title">Tables</span>
						<i class="mdi mdi-table-large menu-icon"></i>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" data-toggle="collapse" href="../assets/#general-pages" aria-expanded="false" aria-controls="general-pages">
						<span class="menu-title">Sample Pages</span>
						<i class="menu-arrow"></i>
						<i class="mdi mdi-medical-bag menu-icon"></i>
					</a>
					<div class="collapse" id="general-pages">
						<ul class="nav flex-column sub-menu">
							<li class="nav-item"> <a class="nav-link" href="../assets/pages/samples/blank-page.html"> Blank Page </a></li>
							<li class="nav-item"> <a class="nav-link" href="../assets/pages/samples/login.html"> Login </a></li>
							<li class="nav-item"> <a class="nav-link" href="../assets/pages/samples/register.html"> Register </a></li>
							<li class="nav-item"> <a class="nav-link" href="../assets/pages/samples/error-404.html"> 404 </a></li>
							<li class="nav-item"> <a class="nav-link" href="../assets/pages/samples/error-500.html"> 500 </a></li>
						</ul>
					</div>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
	export default {
		name: 'SideBar',
		data() {
			return {
				message: 'Welcome to TopBar'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
