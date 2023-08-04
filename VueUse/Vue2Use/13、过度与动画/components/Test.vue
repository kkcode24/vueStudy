<template>
	<div>
		<button @click="isShow = !isShow">显示/隐藏</button>
		<h1>以下为第一个案例</h1>
		<transition name="hello" appear>
			<h2 v-show="isShow">hi~toyo</h2>
		</transition>
	</div>
</template>
<script>
export default {
	name: 'Test',

	data() {
		return {
			isShow: true,
		}
	},
}
</script>
<style scoped>
h2 {
	background-color: orange;
}
.hello-enter-active {
	animation: ailuo 0.5s linear;
}
.hello-leave-active {
	animation: ailuo 0.5s linear reverse;
}
@keyframes ailuo {
	from {
		transform: translateX(-100%);
	}
	to {
		transform: translateX(0px);
	}
}
</style>
