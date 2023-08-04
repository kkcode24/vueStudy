<template>
	<button @click="isShowDemo = !isShowDemo">切换显示隐藏</button>
	<!--vue3的组件模版结构可以没有根标签-->
	<Demo v-if="isShowDemo"> </Demo>
</template>

<script>
import {
	ref,
	onBeforeMount,
	onMounted,
	onBeforeUpdate,
	onUpdated,
	onBeforeUnmount,
	onUnmounted,
} from 'vue'
import Demo from './components/Demo'
export default {
	name: 'App',
	components: { Demo },
	setup(props) {
		let isShowDemo = ref(true)
		//通过组合式api的形式去使用生命周期钩子
		///setup()相当于beforeCreate()和created()
		onBeforeMount(() => {
			console.log('----beforeMount----')
		})
		onMounted(() => {
			console.log('-----mounted-----')
		})
		onBeforeUpdate(() => {
			console.log('-----beforeUpdate-----')
		})
		onUpdated(() => {
			console.log('-----updated-----')
		})
		onBeforeUnmount(() => {
			console.log('-----beforeUnmount----')
		})
		onUnmounted(() => {
			console.log('-----unmounted----')
		})

		console.log('-----setup----')
		return { isShowDemo }
	},
	/* beforeCreate() {
		console.log('-----beforeCreate---------')
	},
	created() {
		console.log('--------created-------')
	},
	beforeMount() {
		console.log('--------beforeMount---------')
	},
	mounted() {
		console.log('-------mounted--------')
	},
	beforeUpdate() {
		console.log('--------beforeUpdate------')
	},
	updated() {
		console.log('------updated------')
	},
	beforeUnmount() {
		console.log('---------beforeUnmount---------')
	},
	unmounted() {
		console.log('----------unmounted--------')
	}, */
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
