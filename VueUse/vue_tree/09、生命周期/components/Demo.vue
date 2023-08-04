<template>
	<h1>当前求和为:{{ sum }}</h1>
	<button @click="sum++">点我加一</button>
</template>

<script>
import { ref } from 'vue'
export default {
	name: 'Demo',
	setup() {
		let sum = ref(0)

		//返回一个对象
		return {
			sum,
		}
	},
}
</script>

<style></style>
