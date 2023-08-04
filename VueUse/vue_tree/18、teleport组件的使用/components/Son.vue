<template>
	<div class="Son">
		<h3>我是Son组件</h3>
		<Dialog></Dialog>
	</div>
</template>
c
<script>
import Dialog from './Dialog.vue'
import { inject } from 'vue'
export default {
	name: 'Son',
	components: { Dialog },
}
</script>

<style>
.Son {
	background-color: orange;
	padding: 10px;
}
</style>
