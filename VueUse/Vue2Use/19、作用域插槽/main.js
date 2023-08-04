import Vue from 'vue'
import App from './App.vue'
// npm i vue-resource
import vueResource from 'vue-resource'
Vue.config.productionTip = false
Vue.use(vueResource)
new Vue({
	el: '#app',
	render: (h) => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this // 安装全局事件总线
	},
})
