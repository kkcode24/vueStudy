<template>
	<div class="app">
		<h3>我是app组件(祖)</h3>
	</div>
</template>

<script>
import {
	isProxy,
	isReactive,
	isReadonly,
	isRef,
	ref,
	reactive,
	readonly,
	toRefs,
} from 'vue'
export default {
	name: 'app',
	setup() {
		let car = reactive({
			brand: '五零宏观min',
			price: '3w',
		})
		let sum = ref(0)
		let car2 = readonly(car)

		console.log(isRef(sum))
		console.log(isReactive(car))
		console.log(isReadonly(car2))
		console.log(isProxy(car2))
		console.log(isProxy(sum))
		return {
			...toRefs(car),
		}
	},
}
</script>

<style>
.app {
	background-color: gray;
	padding: 10px;
}
</style>

Child
