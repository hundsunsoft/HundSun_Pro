<template>
	<div id="about">		
		<fm-generate-form :data="jsonData" :remote="remoteFuncs" :value="editData" ref="generateForm">

		</fm-generate-form>
		<el-button type="primary" @click="handleSubmit">提交</el-button>
	</div>
</template>

<!-- <script>
	export default {
		name: 'About',
		data() {
			return {
				message: 'Hello About'
			}
		}
	}
</script> -->
<!-- <script src="https://unpkg.com/vue/dist/vue.js"></script> -->
<!-- <script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script src="https://unpkg.com/form-making/dist/FormMaking.umd.js"></script> -->

<script>
	import 'element-ui/lib/index.js'
	import 'form-making/dist/FormMaking.umd.js'
	
	export default {
		name: 'About',
		data() {
			return {
				jsonData: {
					"list": [{
						"type": "input",
						"name": "单行文本",
						"icon": "icon-input",
						"options": {
							"width": "100%",
							"defaultValue": "",
							"required": false,
							"dataType": "string",
							"pattern": "",
							"placeholder": "",
							"customClass": "",
							"remoteFunc": "func_1561170574720"
						},
						"key": "1561170574720",
						"model": "input_1561170574720",
						"rules": [{
							"type": "string",
							"message": "单行文本格式不正确"
						}]
					}, {
						"type": "textarea",
						"name": "多行文本",
						"icon": "icon-diy-com-textarea",
						"options": {
							"width": "100%",
							"defaultValue": "",
							"required": false,
							"disabled": false,
							"pattern": "",
							"placeholder": "",
							"customClass": "",
							"remoteFunc": "func_1561170575973"
						},
						"key": "1561170575973",
						"model": "textarea_1561170575973",
						"rules": []
					}, {
						"type": "number",
						"name": "计数器",
						"icon": "icon-number",
						"options": {
							"width": "",
							"required": false,
							"defaultValue": 0,
							"min": 0,
							"max": 0,
							"step": 1,
							"disabled": false,
							"controlsPosition": "",
							"customClass": "",
							"remoteFunc": "func_1561170577435"
						},
						"key": "1561170577435",
						"model": "number_1561170577435",
						"rules": []
					}, {
						"type": "radio",
						"name": "单选框组",
						"icon": "icon-radio-active",
						"options": {
							"inline": false,
							"defaultValue": "",
							"showLabel": false,
							"options": [{
								"value": "选项1",
								"label": "选项1"
							}, {
								"value": "选项2",
								"label": "选项2"
							}, {
								"value": "选项3",
								"label": "选项3"
							}],
							"required": false,
							"width": "",
							"remote": false,
							"remoteOptions": [],
							"props": {
								"value": "value",
								"label": "label"
							},
							"remoteFunc": "func_1561170579336",
							"customClass": ""
						},
						"key": "1561170579336",
						"model": "radio_1561170579336",
						"rules": []
					}, {
						"type": "date",
						"name": "日期选择器",
						"icon": "icon-date",
						"options": {
							"defaultValue": "",
							"readonly": false,
							"disabled": false,
							"editable": true,
							"clearable": true,
							"placeholder": "",
							"startPlaceholder": "",
							"endPlaceholder": "",
							"type": "date",
							"format": "yyyy-MM-dd",
							"timestamp": false,
							"required": false,
							"width": "",
							"customClass": "",
							"remoteFunc": "func_1561170584199"
						},
						"key": "1561170584199",
						"model": "date_1561170584199",
						"rules": []
					}, {
						"type": "time",
						"name": "时间选择器",
						"icon": "icon-time",
						"options": {
							"defaultValue": "",
							"readonly": false,
							"disabled": false,
							"editable": true,
							"clearable": true,
							"placeholder": "",
							"startPlaceholder": "",
							"endPlaceholder": "",
							"isRange": false,
							"arrowControl": true,
							"format": "HH:mm:ss",
							"required": false,
							"width": "",
							"customClass": "",
							"remoteFunc": "func_1561170582019"
						},
						"key": "1561170582019",
						"model": "time_1561170582019",
						"rules": []
					}, {
						"type": "slider",
						"name": "滑块",
						"icon": "icon-slider",
						"options": {
							"defaultValue": 9,
							"disabled": false,
							"required": false,
							"min": 0,
							"max": 100,
							"step": 1,
							"showInput": true,
							"range": false,
							"width": "",
							"customClass": "",
							"remoteFunc": "func_1561170587338"
						},
						"key": "1561170587338",
						"model": "slider_1561170587338",
						"rules": []
					}, {
						"type": "switch",
						"name": "开关",
						"icon": "icon-switch",
						"options": {
							"defaultValue": false,
							"required": false,
							"disabled": false,
							"customClass": "",
							"remoteFunc": "func_1561170595990"
						},
						"key": "1561170595990",
						"model": "switch_1561170595990",
						"rules": []
					}, {
						"type": "grid",
						"name": "栅格布局",
						"icon": "icon-grid-",
						"columns": [{
							"span": 3,
							"list": [{
								"type": "textarea",
								"name": "内容",
								"icon": "icon-diy-com-textarea",
								"options": {
									"width": "100%",
									"defaultValue": "",
									"required": false,
									"disabled": false,
									"pattern": "",
									"placeholder": "",
									"customClass": "",
									"remoteFunc": "func1561170607752"
								},
								"novalid": {},
								"key": "1561170687365",
								"model": "textarea1561170687365",
								"rules": []
							}, {
								"type": "textarea",
								"name": "内容",
								"icon": "icon-diy-com-textarea",
								"options": {
									"width": "100%",
									"defaultValue": "",
									"required": false,
									"disabled": false,
									"pattern": "",
									"placeholder": "",
									"customClass": "",
									"remoteFunc": "func1561170607752"
								},
								"novalid": {},
								"key": "1561170688549",
								"model": "textarea1561170688549",
								"rules": []
							}, {
								"type": "textarea",
								"name": "内容",
								"icon": "icon-diy-com-textarea",
								"options": {
									"width": "100%",
									"defaultValue": "",
									"required": false,
									"disabled": false,
									"pattern": "",
									"placeholder": "",
									"customClass": "",
									"remoteFunc": "func1561170607752"
								},
								"novalid": {},
								"key": "1561170607752",
								"model": "textarea_1561170607752",
								"rules": []
							}]
						}, {
							"span": 3,
							"list": [{
								"type": "input",
								"name": "单行文本",
								"icon": "icon-input",
								"options": {
									"width": "20%",
									"defaultValue": "",
									"required": false,
									"dataType": "string",
									"pattern": "",
									"placeholder": "",
									"customClass": "",
									"remoteFunc": "func1561170677390"
								},
								"key": "1561170683149",
								"model": "input1561170683149",
								"rules": [{
									"type": "string",
									"message": "单行文本格式不正确"
								}],
								"novalid": {}
							}, {
								"type": "input",
								"name": "单行文本",
								"icon": "icon-input",
								"options": {
									"width": "100%",
									"defaultValue": "",
									"required": false,
									"dataType": "string",
									"pattern": "",
									"placeholder": "",
									"customClass": "",
									"remoteFunc": "func1561170700567"
								},
								"novalid": {},
								"key": "1561170700567",
								"model": "input_1561170700567",
								"rules": [{
									"type": "string",
									"message": "单行文本格式不正确"
								}]
							}, {
								"type": "rate",
								"name": "评分",
								"icon": "icon-icon-test",
								"options": {
									"defaultValue": 0,
									"max": 5,
									"disabled": false,
									"allowHalf": false,
									"required": false,
									"customClass": "",
									"remoteFunc": "func1561170703808"
								},
								"novalid": {},
								"key": "1561170703808",
								"model": "rate_1561170703808",
								"rules": []
							}, {
								"type": "input",
								"name": "单行文本",
								"icon": "icon-input",
								"options": {
									"width": "20%",
									"defaultValue": "",
									"required": false,
									"dataType": "string",
									"pattern": "",
									"placeholder": "",
									"customClass": "",
									"remoteFunc": "func1561170677390"
								},
								"key": "1561170684425",
								"model": "input1561170684425",
								"rules": [{
									"type": "string",
									"message": "单行文本格式不正确"
								}],
								"novalid": {}
							}, {
								"type": "input",
								"name": "单行文本",
								"icon": "icon-input",
								"options": {
									"width": "20%",
									"defaultValue": "",
									"required": false,
									"dataType": "string",
									"pattern": "",
									"placeholder": "",
									"customClass": "",
									"remoteFunc": "func1561170677390"
								},
								"key": "1561170685184",
								"model": "input1561170685184",
								"rules": [{
									"type": "string",
									"message": "单行文本格式不正确"
								}],
								"novalid": {}
							}, {
								"type": "input",
								"name": "单行文本",
								"icon": "icon-input",
								"options": {
									"width": "20%",
									"defaultValue": "",
									"required": false,
									"dataType": "string",
									"pattern": "",
									"placeholder": "",
									"customClass": "",
									"remoteFunc": "func1561170677390"
								},
								"key": "1561170677390",
								"model": "input_1561170677390",
								"rules": [{
									"type": "string",
									"message": "单行文本格式不正确"
								}],
								"novalid": {}
							}]
						}],
						"options": {
							"gutter": 0,
							"justify": "start",
							"align": "top",
							"customClass": "",
							"remoteFunc": "func_1561170599805"
						},
						"key": "1561170599805",
						"model": "grid_1561170599805",
						"rules": []
					}],
					"config": {
						"labelWidth": 100,
						"labelPosition": "right",
						"size": "small",
						"customClass": ""
					}
				},
				editData: {},
				remoteFuncs: {

				},
			}
		},
		methods: {
			handleSubmit() {
				this.$refs.generateForm.getData().then(data => {
					// 数据校验成功
					// data 为获取的表单数据
					alert("helloworld")
				}).catch(e => {
					// 数据校验失败
					alert("helloworld1")
				})
				alert("helloworld2")
			}
		}
	}
</script>

<!-- <script src="//unpkg.com/element-ui/lib/index.js"></script> -->

<!-- <style scoped src="../assets/index.css" />
<style scoped src="../assets/style.css" /> -->

<!-- <style scoped src="https://unpkg.com/element-ui/lib/theme-chalk/index.css"></style>
<style scoped src="https://unpkg.com/form-making/dist/FormMaking.css"></style> -->
<!-- 		<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
		<link rel="stylesheet" href="https://unpkg.com/form-making/dist/FormMaking.css"> -->
<!-- <style scoped>
	@import '../../static/index.css';
	@import '../../static/style.css';
</style> -->
