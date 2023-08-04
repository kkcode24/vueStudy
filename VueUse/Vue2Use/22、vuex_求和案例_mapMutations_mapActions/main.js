import Vue from 'vue'
import App from './App.vue'
// npm i vue-resource 引入插件VueResource
import vueResource from 'vue-resource'
//引入store
import store from './store'
Vue.config.productionTip = false
Vue.use(vueResource)

new Vue({
	el: '#app',
	store,
	render: (h) => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this // 安装全局事件总线
	},
})
