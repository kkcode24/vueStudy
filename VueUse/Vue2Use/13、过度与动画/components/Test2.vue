<template>
	<div>
		<button @click="isShow = !isShow">显示/隐藏</button>
		<h1>以下为第二个案例</h1>
		<transition-group name="hello2" appear>
			<h2 v-show="!isShow" key="1">仅仅是学习以下vue动画</h2>
			<h2 v-show="isShow" key="2">vue动画交替isShow</h2>
		</transition-group>
	</div>
</template>
<script>
export default {
	name: 'Test2',

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
/* .hello-enter-active {
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
} */
/**进入的起点,离开的终点 */
.hello2-enter,
.hello2-leave-to {
	transform: translateX(-100%);
}
.hello2-enter-active,
.hello2-leave-active {
	transition: 0.5s linear;
}
/**进入的终点,离开的起点 */
.hello2-enter-to,
.hello2-leave {
	transform: translateX(0px);
}
</style>
