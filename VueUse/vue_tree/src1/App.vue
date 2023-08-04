<template>
	<div class="app">
		<h3>我是app组件</h3>
		<Suspense>
			<template v-slot:default>
				<Child></Child>
			</template>
			<template v-slot:fallback>
				<h3>稍等,加载中...</h3>
			</template>
		</Suspense>
	</div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
// import Child from './components/Child.vue' //静态引入
const Child = defineAsyncComponent(() => import('./components/Child.vue')) //异步引入
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
