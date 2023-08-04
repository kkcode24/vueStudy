<template>
	<div>
		<button @click="isShow = !isShow">显示/隐藏</button>
		<h1>以下为第三个案例</h1>
		<transition-group
			appear
			name="animate__animated animate__bounce"
			enter-active-class="animate__swing"
			leave-active-class="animate__backOutUp"
		>
			<h2 v-show="!isShow" key="1">你好啊！</h2>
			<h2 v-show="isShow" key="2">瓦达西~</h2>
		</transition-group>
	</div>
</template>

<script>
import 'animate.css'

export default {
	name: 'Test3',
	data() {
		return { isShow: true }
	},
}
</script>

<style scoped>
h2 {
	background-color: orange;
}
</style>
