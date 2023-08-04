<template>
	<button @click="isShowDemo = !isShowDemo">切换显示隐藏</button>
	<!--vue3的组件模版结构可以没有根标签-->
	<Demo v-if="isShowDemo"> </Demo>
	<Test></Test>
</template>

<script>
import { ref } from 'vue'
import Demo from './components/Demo'
import Test from './components/Test'
export default {
	name: 'App',
	components: { Demo, Test },
	setup() {
		let isShowDemo = ref(true)
		console.log('-----setup----')
		return { isShowDemo }
	},
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
