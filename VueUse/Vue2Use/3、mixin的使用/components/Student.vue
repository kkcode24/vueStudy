<template>
	<div>
		<h2 @click="showName">学生姓名：{{ name }}</h2>
		<h2>学生性别：{{ sex }}</h2>
	</div>
</template>

<script>
/**
 * b.使用混入
   i.全局混入Vue.mixin(xxx)
   ii.局部混入mixins:['xxx']
 */
import { hunhe, hunhe2 } from '../mixin'

export default {
	name: 'Student',
	data() {
		return {
			name: '张三',
			sex: '男',
		}
	},
	mixins: [hunhe, hunhe2], // 局部混入
}
</script>
