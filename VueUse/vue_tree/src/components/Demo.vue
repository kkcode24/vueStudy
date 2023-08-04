<template>
	<h4>当前的求和为：{{ sum }}</h4>
	<button @click="sum++">点我sum++</button>
	<br />
	<h2>姓名:{{ name }}</h2>
	<h2>年龄:{{ age }}</h2>
	<h2>薪资:{{ job.j1.salary }}</h2>
	<h2 v-show="person.car">座驾信息:{{ person.car }}</h2>
	<button @click="name += '~'">修改姓名</button><br />
	<button @click="age += 1">修改年龄</button><br />
	<button @click="job.j1.salary += 10">涨薪</button><br />
	<button @click="showRawPerson">输出最原始的person</button><br />
	<button @click="addCarToPerson">给人添加一台车</button><br />
	<button @click="person.car.brand += '!'">换车名</button><br />
	<button @click="person.car.price++">换价格</button><br />
</template>

<script>
import { ref, reactive, toRefs, toRaw, markRaw } from 'vue'
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
		function showRawPerson() {
			/**
			 * 还原为原始数据
			 */
			const p = toRaw(person)
			console.log(p)
			//响应式数据
			//console.log(person)
		}
		function addCarToPerson() {
			let car = { brand: '五菱宏光mini', price: 30000 }
			//标记为原始数据
			person.car = markRaw(car)
		}
		//返回一个对象
		return {
			sum,
			person,
			...toRefs(person),
			showRawPerson,
			addCarToPerson,
		}
	},
}
</script>

<style></style>
