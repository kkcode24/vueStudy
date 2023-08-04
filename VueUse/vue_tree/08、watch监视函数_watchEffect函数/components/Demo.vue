<template>
	<h1>当前求和为:{{ sum }}</h1>
	<button @click="sum++">点我加一</button>
	<hr />
	<h2>当前的信息为:{{ msg }}</h2>
	<button @click="msg += '!'">修改信息</button>
	<hr />
	<h2>姓名:{{ person.name }}</h2>
	<h2>年龄:{{ person.age }}</h2>
	<h2>薪资:{{ person.job.j1.salary }}</h2>
	<button @click="person.name += '~'">修改姓名</button><br />
	<button @click="person.age += 1">修改年龄</button><br />
	<button @click="person.job.j1.salary += 10">涨薪</button><br />
</template>

<script>
import { ref, reactive, watch, watchEffect } from 'vue'
export default {
	name: 'Demo',
	// watch: {
	// 	/* 	sum(newValue, oldValue) {
	// 		console.log('sum值变化了', newValue, oldValue)
	// 	}, */
	// 	sum: {
	// 		//立即监听，还没动就先监听一次
	// 		immediate: true,
	// 		//深度监视
	// 		deep: true,
	// 		handler(newValue, oldValue) {
	// 			console.log('sum的值变化了', newValue, oldValue)
	// 		},
	// 	},
	// },
	setup() {
		let sum = ref(0)
		let msg = ref('你好')
		let person = ref({
			name: '张三',
			age: 16,
			job: {
				j1: {
					salary: 20,
				},
			},
		})
		//watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调。
		watchEffect(() => {
			const x1 = sum.value
			const x2 = person.value.age
			console.log('watchEffect配置的回调执行了')
		})
		//返回一个对象
		return {
			sum,
			msg,
			person,
		}
	},
}
</script>

<style></style>
