<template>
	<h2>一个人的信息</h2>
	<h2>姓名:{{ person.name }}</h2>
	<h2>年龄:{{ person.age }}</h2>
	<h2>工作类型:{{ person.job.type }}</h2>
	<h2>工作薪资:{{ person.job.salary }}</h2>
	<h2>{{ person.hobby }}</h2>
	<h2>测试reactive监测数据:{{ person.job.a.b.c }}</h2>
	<button @click="changeInfo">修改人的信息</button>
</template>

<script>
// import { h } from 'vue'
import { reactive, ref } from 'vue'
export default {
	name: 'App',
	components: {},
	setup() {
		//数据
		// let name = ref('埃罗芒阿')
		// let age = ref(18)
		// let job = ref({ type: '动画设计师', salary: 18000 })
		let person = reactive({
			name: '埃罗芒阿',
			age: 18,
			job: {
				type: '动画设计师',
				salary: 18000,
				a: {
					b: {
						c: 666,
					},
				},
			},
			hobby: ['抽烟', '喝酒', '烫头'],
		})
		//方法
		function changeInfo() {
			person.name = '埃罗芒阿老师'
			person.age = 16
			person.job.type = '漫画师'
			person.job.salary = 18300
			person.job.a.b.c = 999
			person.hobby[0] = '打豆豆'
			console.log(person.name, person.age)
		}

		//返回一个函数(常用)
		return {
			person,
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
