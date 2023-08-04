<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<h2>姓名:{{ name }}</h2>
	<h2>年龄:{{ age }}</h2>
	<button @click="sayHello">说话</button>
</template>

<script>
import { h } from 'vue'
export default {
	name: 'App',
	components: {},
	setup() {
		//数据
		let name = '埃罗芒阿'
		let age = 16
		//方法
		function sayHello() {
			alert(`我叫${name},我${age}岁了,hello~`)
		}

		//返回一个函数(常用)
		return {
			name,
			age,
			sayHello,
		}
		//返回一个函数(渲染函数)
		//return () => h('h1', 'toyo')
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
