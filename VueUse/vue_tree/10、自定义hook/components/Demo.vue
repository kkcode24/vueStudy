<template>
	<h1>当前求和为:{{ sum }}</h1>
	<button @click="sum++">点我加一</button>
	<hr />
	<h2>当前点击时的鼠标的坐标为:x:{{ point.x }},y:{{ point.y }}</h2>
</template>

<script>
import { ref, reactive, onMounted, onBeforeMount, onBeforeUnmount } from 'vue'
import usePoint from '../hooks/usePoint'
export default {
	name: 'Demo',
	setup() {
		let sum = ref(0)
		let point = usePoint()
		//返回一个对象
		return {
			sum,
			point,
		}
	},
}
</script>

<style></style>
