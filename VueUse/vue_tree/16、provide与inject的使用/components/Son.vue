<template>
	<div class="Son">
		<h3>我是Son组件(孙),{{ car.brand }}---{{ car.price }}</h3>
	</div>
</template>
c
<script>
import { inject } from 'vue'
export default {
	name: 'Son',
	setup() {
		let car = inject('car')
		return { car }
	},
}
</script>

<style>
.Son {
	background-color: orange;
	padding: 10px;
}
</style>
