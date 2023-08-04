<template>
	<h2>一个人的信息</h2>
	<h2>姓名:{{ name }}</h2>
	<h2>年龄:{{ age }}</h2>
	<h2>工作类型:{{ job.type }}</h2>
	<h2>工作薪资:{{ job.salary }}</h2>
	<button @click="changeInfo">修改人的信息</button>
</template>

<script>
// import { h } from 'vue'
import { ref } from 'vue'
export default {
	name: 'App',
	components: {},
	setup() {
		//数据
		let name = ref('埃罗芒阿')
		let age = ref(18)
		let job = ref({ type: '动画设计师', salary: 18000 })
		//方法
		function changeInfo() {
			name.value = '埃罗芒阿老师'
			age.value = 16
			job.value.type = '漫画师'
			job.value.salary = 18300
			console.log(name, age)
		}

		//返回一个函数(常用)
		return {
			name,
			age,
			job,
			changeInfo,
		}
		//返回一个函数(渲染函数)
		//return () => h('h1', 'toyo')
	},
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
