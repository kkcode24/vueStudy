<template>
	{{ person }}
	<br />
	<h2>姓名:{{ name }}</h2>
	<h2>年龄:{{ age }}</h2>
	<h2>薪资:{{ job.j1.salary }}</h2>
	<button @click="name += '~'">修改姓名</button><br />
	<button @click="age += 1">修改年龄</button><br />
	<button @click="job.j1.salary += 10">涨薪</button><br />
</template>

<script>
import { reactive, toRef, toRefs } from 'vue'
export default {
	name: 'Demo',
	setup() {
		let person = reactive({
			name: '张三',
			age: 16,
			job: {
				j1: {
					salary: 20,
				},
			},
		})
		/**
		 * toRef()函数
		 */
		/*const name1 = person.name
		console.log('%%%', name1)
		const name2 = toRef(person, 'name')
		console.log('####', name2) */

		/**
		 * toRefs函数
		 */
		const x = toRefs(person)
		console.log('********', x)
		//返回一个对象
		return {
			person,
			...toRefs(person),
		}
	},
}
</script>

<style></style>
