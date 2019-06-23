// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMeta from 'vue-meta'
import $ from 'jquery'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min'
import './assets/vendors/iconfonts/mdi/css/materialdesignicons.min.css'
import './assets/vendors/css/vendor.bundle.base.css'
import './assets/css/style.css'

// import ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// import form-making
import FormMaking from 'form-making'
import 'form-making/dist/FormMaking.css'
Vue.use(FormMaking)
	
Vue.config.productionTip = false
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// var devInnerHeight = 1080.0 // 开发时的InnerHeight
// var devDevicePixelRatio = 1.0// 开发时的devicepixelratio
// var devScaleFactor = 1.3 // 开发时的ScaleFactor
// var scaleFactor = require('electron').screen.getPrimaryDisplay().scaleFactor
// var zoomFactor = (window.innerHeight / devInnerHeight) * (window.devicePixelRatio / devDevicePixelRatio) * (devScaleFactor / scaleFactor)
// require('electron').webFrame.setZoomFactor(zoomFactor)
// 