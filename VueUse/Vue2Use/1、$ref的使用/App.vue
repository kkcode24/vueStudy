<!-- 
ref被用来给元素或子组件注册引用信息（id的替代者）
●应用在html标签上获取的是真实DOM元素，应用在组件标签上获取的是组件实例对象vc
●使用方式 
    a.打标识：<h1 ref="xxx"></h1>或<School ref="xxx"></School>
    b.获取：this.$refs.xxx
 -->
<template>
	<div>
		<img src="./assets/logo.png" alt="logo" />
		<h1 v-text="msg" ref="title"></h1>
		<button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
		<School ref="sch"></School>
		<Student></Student>
	</div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
	name: 'App',
	components: {
		School,
		Student,
	},
	data() {
		return {
			msg: '欢迎来到toyo~',
		}
	},
	methods: {
		showDOM() {
			console.log(this.$refs.title)) //真实DOM元素
			console.log(this.$refs.btn) //真实DOM元素
			console.log(this.$refs.sch) //School组件的实例化对象vc
		},
	},
}
</script>
