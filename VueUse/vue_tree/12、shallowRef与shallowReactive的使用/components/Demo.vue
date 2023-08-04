<template>
	<h4>当前的x.y值为:{{ x.y }}</h4>
	<button @click="x.y++">点我x.y++</button>
	<hr />
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
import { ref, reactive, toRef, toRefs, shallowReactive, shallowRef } from 'vue'
export default {
	name: 'Demo',
	setup() {
		/**
		 * reactive 深层次
		 * shallowReactive 浅层次 只考虑第一层数据的响应式
		 */
		//let person = shallowReactive({
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
		 * shallowRef不做对象响应式请求
		 */
		let x = shallowRef({
			y: 0,
		})
		//返回一个对象
		return {
			x,
			person,
			...toRefs(person),
		}
	},
}
</script>

<style></style>
