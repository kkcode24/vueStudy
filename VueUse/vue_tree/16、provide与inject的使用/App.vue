<template>
	<div class="app">
		<h3>我是app组件(祖), {{ brand }}-----{{ price }}</h3>
		<Child></Child>
	</div>
</template>

<script>
import { provide, reactive, toRefs } from 'vue'
import Child from './components/Child.vue'
export default {
	name: 'app',
	components: { Child },
	setup() {
		let car = reactive({
			brand: '五零宏观min',
			price: '3w',
		})
		provide('car', car)
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
