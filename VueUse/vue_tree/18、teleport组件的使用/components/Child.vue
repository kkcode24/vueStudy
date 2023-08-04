<template>
	<div class="Child">
		<h3>我是Child组件</h3>
		<Son></Son>
	</div>
</template>
c
<script>
import Son from './Son.vue'
export default {
	name: 'Child',
	components: { Son },
}
</script>

<style>
.app {
	background-color: skyblue;
	padding: 10px;
}
</style>
