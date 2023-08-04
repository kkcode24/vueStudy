<template>
	<div>
		<h2>当前求和为：{{ sum }}</h2>
		<h2>当前求和放大10倍后为：{{ bigSum }}</h2>
		<h3>我在{{ school }}，学习{{ subject }}</h3>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementOdd">当前求和为奇数再加</button>
		<button @click="incrementWait">等一等再加</button>
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
	name: 'Count',
	data() {
		return {
			n: 1, // 用户选择的数字
		}
	},
	methods: {
		increment() {
			this.$store.commit('JIA', this.n)
		},
		decrement() {
			this.$store.commit('JIAN', this.n)
		},
		incrementOdd() {
			if (this.$store.state.sum % 2) {
				this.$store.dispatch('jiaOdd', this.n)
			}
		},
		incrementWait() {
			setTimeout(() => {
				this.$store.dispatch('jiaWait', this.n)
			}, 500)
		},
	},
	computed: {
		//尚硅谷vue p112
		//借助mapState生成计算属性:sum、school、subject(对象方法一)
		...mapState({ sum: 'sum', school: 'school', subject: 'subject' }),
		//借助mapState生成计算属性:sum、school、subject(数组方法一)
		//...mapState(['sum', 'school', 'subject']),

		//借助mapGetters生成计算属性：bigSum（对象写法一）
		//...mapGetters({ bigSum: 'bigSum' }),
		//借助mapGetters生成计算属性：bigSum（数组写法二）
		...mapGetters(['bigSum']),
	},
}
</script>

<style>
button {
	margin-left: 5px;
}
</style>
