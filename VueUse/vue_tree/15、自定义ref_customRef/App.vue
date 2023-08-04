<template>
	<input type="text" v-model="keyWord" />
	<h2>{{ keyWord }}</h2>
</template>

<script>
import { ref, customRef } from 'vue'
export default {
	name: 'App',
	setup() {
		//自定义一个ref——名为：myRef
		function myRef(value, delay) {
			let timer
			return customRef((track, trigger) => {
				return {
					get() {
						console.log(
							`有人从myRef这个容器中读取数据了,我把${value}给它了`
						)
						track() //通知vue追踪数据的变化(提前和get商量一下，)
						return value
					},
					set(newValue) {
						console.log(`有人从myRef这个容器中数据改为${newValue}`)
						clearTimeout(timer)
						timer = setTimeout(() => {
							value = newValue
							trigger() //通知vue去重新解析模板
						}, delay)
					},
				}
			})
		}

		// let keyWord = ref('hello') //使用vue提供的ref
		let keyWord = myRef('hello', 500) //使用程序员自定义的ref
		return {
			keyWord,
		}
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
