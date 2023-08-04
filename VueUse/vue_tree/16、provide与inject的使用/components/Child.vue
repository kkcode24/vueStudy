<template>
	<div class="Child">
		<h3>我是Child组件(子)</h3>
		<Son></Son>
	</div>
</template>
c
<script>
import Son from './Son.vue'
export default {
	name: 'Child',
	components: { Son },
	/* setup() {
		let car = inject('car')
		console.log(x, 'child----------')
	}, */
}
</script>

<style>
.app {
	background-color: skyblue;
	padding: 10px;
}
</style>
