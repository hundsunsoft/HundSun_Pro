<template>
	<div>
		<div class="content-wrapper">
			<div class="col-12 grid-margin">
				<div class="card">
					<div class="card-body">
						<h4 class="card-title">
							<font style="vertical-align: inherit;">
								<font style="vertical-align: inherit;">客户信息</font>
							</font>
						</h4>
						<form class="form-sample">
							<p class="card-description">
								<font style="vertical-align: inherit;">
									<font style="vertical-align: inherit;">
										基本信息
									</font>
								</font>
							</p>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group row">
										<label class="col-sm-3 col-form-label">
											<font style="vertical-align: inherit;">
												<font style="vertical-align: inherit;">名字</font>
											</font>
										</label>
										<div class="col-sm-9">
											<input type="text" class="form-control">
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group row">
										<label class="col-sm-3 col-form-label">
											<font style="vertical-align: inherit;">
												<font style="vertical-align: inherit;">别名</font>
											</font>
										</label>
										<div class="col-sm-9">
											<input type="text" class="form-control">
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group row">
										<label class="col-sm-3 col-form-label">
											<font style="vertical-align: inherit;">
												<font style="vertical-align: inherit;">性别</font>
											</font>
										</label>
										<div class="col-sm-9">
											<select class="form-control">
												<option>
													<font style="vertical-align: inherit;">
														<font style="vertical-align: inherit;">男</font>
													</font>
												</option>
												<option>
													<font style="vertical-align: inherit;">
														<font style="vertical-align: inherit;">女</font>
													</font>
												</option>
											</select>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group row">
										<label class="col-sm-3 col-form-label">
											<font style="vertical-align: inherit;">
												<font style="vertical-align: inherit;">创建日期</font>
											</font>
										</label>
										<div class="col-sm-9">
											<input class="form-control" placeholder="dd/mm/yyyy">
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group row">
										<label class="col-sm-3 col-form-label">
											<font style="vertical-align: inherit;">
												<font style="vertical-align: inherit;">项目类型</font>
											</font>
										</label>
										<div class="col-sm-9">
											<select class="form-control">
												<option>
													<font style="vertical-align: inherit;">
														<font style="vertical-align: inherit;">网站</font>
													</font>
												</option>
												<option>
													<font style="vertical-align: inherit;">
														<font style="vertical-align: inherit;">公众号</font>
													</font>
												</option>
												<option>
													<font style="vertical-align: inherit;">
														<font style="vertical-align: inherit;">APP</font>
													</font>
												</option>
												<option>
													<font style="vertical-align: inherit;">
														<font style="vertical-align: inherit;">小程序</font>
													</font>
												</option>
												<option>
													<font style="vertical-align: inherit;">
														<font style="vertical-align: inherit;">软件</font>
													</font>
												</option>
											</select>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group row">
										<label class="col-sm-3 col-form-label">
											<font style="vertical-align: inherit;">
												<font style="vertical-align: inherit;">联系电话</font>
											</font>
										</label>
										<div class="col-sm-9">
											<input type="text" class="form-control">
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group row">
										<label class="col-sm-3 col-form-label">
											<font style="vertical-align: inherit;">
												<font style="vertical-align: inherit;">微信</font>
											</font>
										</label>
										<div class="col-sm-9">
											<input type="text" class="form-control">
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group row">
										<label class="col-sm-3 col-form-label">
											<font style="vertical-align: inherit;">
												<font style="vertical-align: inherit;">QQ</font>
											</font>
										</label>
										<div class="col-sm-9">
											<input type="text" class="form-control">
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group row">
										<label class="col-sm-3 col-form-label">
											<font style="vertical-align: inherit;">
												<font style="vertical-align: inherit;">初次报价</font>
											</font>
										</label>
										<div class="input-group col-sm-9">
										  <div class="input-group-prepend">
											<span class="input-group-text bg-gradient-primary text-white"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">￥</font></font></span>
										  </div>
										  <input type="text" class="form-control" aria-label="金额（到最近的美元）">
										  <div class="input-group-append">
											<span class="input-group-text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.00</font></font></span>
										  </div>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group row">
										<label class="col-sm-3 col-form-label">
											<font style="vertical-align: inherit;">
												<font style="vertical-align: inherit;">二次报价</font>
											</font>
										</label>
										<div class="input-group col-sm-9">
										  <div class="input-group-prepend">
											<span class="input-group-text bg-gradient-primary text-white"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">￥</font></font></span>
										  </div>
										  <input type="text" class="form-control" aria-label="金额（到最近的美元）">
										  <div class="input-group-append">
											<span class="input-group-text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.00</font></font></span>
										  </div>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group row">
										<label class="col-sm-3 col-form-label">
											<font style="vertical-align: inherit;">
												<font style="vertical-align: inherit;">最终报价</font>
											</font>
										</label>
										<div class="input-group col-sm-9">
										  <div class="input-group-prepend">
											<span class="input-group-text bg-gradient-primary text-white"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">￥</font></font></span>
										  </div>
										  <input type="text" class="form-control" aria-label="金额（到最近的美元）">
										  <div class="input-group-append">
											<span class="input-group-text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.00</font></font></span>
										  </div>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group row">
										<label class="col-sm-3 col-form-label">
											<font style="vertical-align: inherit;">
												<font style="vertical-align: inherit;">客户预算</font>
											</font>
										</label>
										<div class="input-group col-sm-9">
										  <div class="input-group-prepend">
											<span class="input-group-text bg-gradient-primary text-white"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">￥</font></font></span>
										  </div>
										  <input type="text" class="form-control" aria-label="金额（到最近的美元）">
										  <div class="input-group-append">
											<span class="input-group-text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.00</font></font></span>
										  </div>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group row">
										<label class="col-sm-3 col-form-label">
											<font style="vertical-align: inherit;">
												<font style="vertical-align: inherit;">需求描述</font>
											</font>
										</label>
										<div class="col-sm-9">
											<input type="text" class="form-control">
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group row">
										<label class="col-sm-3 col-form-label">
											<font style="vertical-align: inherit;">
												<font style="vertical-align: inherit;">挑选UI</font>
											</font>
										</label>
										<div class="col-sm-9">
											<input type="text" class="form-control">
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group row">
										<label class="col-sm-3 col-form-label">
											<font style="vertical-align: inherit;">
												<font style="vertical-align: inherit;">客户状态</font>
											</font>
										</label>
										<div class="col-sm-9">
											<select class="form-control">
												<option>
													<font style="vertical-align: inherit;">
														<font style="vertical-align: inherit;">---请选择---</font>
													</font>
												</option>
												<option>
													<font style="vertical-align: inherit;">
														<font style="vertical-align: inherit;">有意向客户</font>
													</font>
												</option>
												<option>
													<font style="vertical-align: inherit;">
														<font style="vertical-align: inherit;">持续联系客户</font>
													</font>
												</option>
												<option>
													<font style="vertical-align: inherit;">
														<font style="vertical-align: inherit;">无业务往来客户</font>
													</font>
												</option>
												<option>
													<font style="vertical-align: inherit;">
														<font style="vertical-align: inherit;">放弃</font>
													</font>
												</option>
											</select>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group row">
										<label class="col-sm-3 col-form-label">
											<font style="vertical-align: inherit;">
												<font style="vertical-align: inherit;">需求状态</font>
											</font>
										</label>
										<div class="col-sm-9">
											<select class="form-control">
												<option>
													<font style="vertical-align: inherit;">
														<font style="vertical-align: inherit;">---请选择---</font>
													</font>
												</option>
												<option>
													<font style="vertical-align: inherit;">
														<font style="vertical-align: inherit;">工作中</font>
													</font>
												</option>
												<option>
													<font style="vertical-align: inherit;">
														<font style="vertical-align: inherit;">已下单，未托管金额</font>
													</font>
												</option>
												<option>
													<font style="vertical-align: inherit;">
														<font style="vertical-align: inherit;">工作完成</font>
													</font>
												</option>
												<option>
													<font style="vertical-align: inherit;">
														<font style="vertical-align: inherit;">工作中断</font>
													</font>
												</option>
												<option>
													<font style="vertical-align: inherit;">
														<font style="vertical-align: inherit;">违约</font>
													</font>
												</option>
											</select>
										</div>
									</div>
								</div>
							</div>
							<input type="submit" class="btn btn-gradient-primary mr-2" value="新增">	</input>
							<input type="submit" class="btn btn-gradient-primary mr-2" value="查询">	</input>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Info',
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
