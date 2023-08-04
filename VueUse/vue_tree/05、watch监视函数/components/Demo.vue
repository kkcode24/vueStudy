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
import { ref, reactive, watch } from 'vue'
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
		let person = reactive({
			name: '张三',
			age: 16,
			job: {
				j1: {
					salary: 20,
				},
			},
		})

		//情况一:监听ref所定义的响应式数据
		/* 	watch(
			sum,
			(newValue, oldValue) => {
				console.log('sum变了', newValue, oldValue)
			},
			{ immediate: true }
		) */

		//情况二:监听ref所定义的多个响应式数据
		/* 	watch(sum, (newValue, oldValue) => {
			console.log('sum变了', newValue, oldValue)
		})
		watch(msg, (newValue, oldValue) => {
			console.log('msg变了', newValue, oldValue)
		}) */
		/* 		watch([sum, msg], (newValue, oldValue) => {
			console.log('sum或msg变了', newValue, oldValue)
		}) */

		/**
		 *情况三:监听reactive所定义的多个响应式数据
         1、注意:此处无法正确的获取oldValue
         2、注意:强制开启了深度监视(deep配置无效)
		 */
		/* 	watch(person, (newValue, oldValue) => {
			console.log('person变了', newValue, oldValue)
		}) */
        
		//情况四:监视reactive所定义的一个响应式数据中的某个属性
		/* watch(
			() => person.age,
			(newValue, oldValue) => {
				console.log('person的age变了', newValue, oldValue)
			}
		) */

		//情况五：监视reactive所定义的一个响应式数据中的某些属性
		/* 	watch([() => person.age, () => person.name], (newValue, oldValue) => {
			console.log('person的age或name变化了', newValue, oldValue)
		}) */

		/**特殊情况 */
		watch(
			person.job,
			(newValue, oldValue) => {
				console.log('person的job变化了', newValue, oldValue)
			},
			{ deep: true }
		)
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
