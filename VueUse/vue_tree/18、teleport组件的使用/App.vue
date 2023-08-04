<template>
	<div class="app">
		<h3>我是app组件</h3>
		<Child></Child>
	</div>
</template>

<script>
import { provide, reactive, toRefs } from 'vue'
import Child from './components/Child.vue'
export default {
	name: 'app',
	components: { Child },
}
</script>

<style>
.app {
	background-color: gray;
	padding: 10px;
}
</style>

Child
