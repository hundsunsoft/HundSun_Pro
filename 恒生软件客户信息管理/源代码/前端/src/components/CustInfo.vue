<template>
	<div>
		<h1>客户信息管理</h1>
		<form>
			<fieldset>
				<div class="form-group">
					<label for="exampleInputEmail1" class="lable_left">姓名</label>
					<input type="email" class="" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style="width: 30%;">
					<label for="exampleInputEmail1" class="lable_right">公司</label>
					<input type="email" class="" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style="width: 30%;">
				</div>
				<div class="form-group">
					<label for="exampleInputEmail1" class="lable_left">日期</label>
					<input type="email" class="" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style="width: 30%;">
					<label for="exampleInputEmail1" class="lable_right">联系电话</label>
					<input type="email" class="" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style="width: 30%;">
				</div>
				<div class="form-group">
					<label for="exampleInputEmail1" class="lable_left">微信</label>
					<input type="email" class="" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style="width: 30%;">
					<label for="exampleInputEmail1" class="lable_right">QQ</label>
					<input type="email" class="" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style="width: 30%;">
				</div>
				<div class="form-group">
					<label for="exampleInputEmail1" class="lable_left">邮箱</label>
					<input type="email" class="" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style="width: 30%;">
					<label for="exampleInputEmail1" class="lable_right">备注</label>
					<input type="email" class="" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style="width: 30%;">
				</div>
				<button type="submit" class="btn btn-primary">查询</button>
			</fieldset>
		</form>

	</div>
</template>

<script>
	export default {
		name: 'Cust',
		data() {
			return {
				message: 'Hello Cust'
			}
		}
	}
</script>

<style>
	.lable_left{
		width: 10%;
		/* margin-left: 5%; */
	}
	.lable_right{
		width: 10%; 
		margin-left: 10%;
		text-align: left;
	}
	.submit{
		margin-left: 50%;
	}
</style>
