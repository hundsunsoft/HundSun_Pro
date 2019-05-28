<template>
<div>
	<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
		<a class="navbar-brand" href="#">Navbar</a>
<!-- 		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" style="display: none;">
			<span class="navbar-toggler-icon"></span>
		</button> -->
		<div style="height: 13px;">
		</div>

		<div class="collapse navbar-collapse" id="navbarColor01">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item active">
					<router-link class="nav-link" to="/">Home</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/customer">客户信息</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/user">用户</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/about">关于</router-link>
				</li>
			</ul>
			<form class="form-inline my-2 my-lg-0">
				<input class="form-control mr-sm-2" type="text" placeholder="Search">
				<button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
			</form>
		</div>
	</nav>
</div>
</template>

<script>
export default {
  name: 'TopBar',
  data () {
    return {
      message: 'Welcome to TopBar'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
