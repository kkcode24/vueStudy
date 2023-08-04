<template>
	<h4>当前的求和为：{{ sum }}</h4>
	<button @click="sum++">点我sum++</button>
	<br />
	<h2>姓名:{{ name }}</h2>
	<h2>年龄:{{ age }}</h2>
	<h2>薪资:{{ job.j1.salary }}</h2>
	<button @click="name += '~'">修改姓名</button><br />
	<button @click="age += 1">修改年龄</button><br />
	<button @click="job.j1.salary += 10">涨薪</button><br />
</template>

<script>
import { ref, reactive, toRefs, readonly, shallowReadonly } from 'vue'
export default {
	name: 'Demo',
	setup() {
		let sum = ref(0)
		let person = reactive({
			name: '张三',
			age: 16,
			job: {
				j1: {
					salary: 20,
				},
			},
		})
		//person = readonly(person)
		person = shallowReadonly(person)
		//返回一个对象
		return {
			sum,
			...toRefs(person),
		}
	},
}
</script>

<style></style>
