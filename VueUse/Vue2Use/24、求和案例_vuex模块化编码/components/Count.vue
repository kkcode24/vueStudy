<template>
	<div>
		<h2>当前求和为：{{ sum }}</h2>
		<h2>当前求和放大10倍后为：{{ bigSum }}</h2>
		<h3>我在{{ school }}，学习{{ subject }}</h3>
		<h3 style="color: red">Person组件中人数:{{ personList.length }}</h3>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment(n)">+</button>
		<button @click="decrement(n)">-</button>
		<button @click="incrementOdd(n)">当前求和为奇数再加</button>
		<button @click="incrementWait(n)">等一等再加</button>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
	name: 'Count',
	data() {
		return {
			n: 1, // 用户选择的数字
		}
	},
	methods: {
		// increment() {
		// 	this.$store.commit('JIA', this.n)
		// },
		// decrement() {
		// 	this.$store.commit('JIAN', this.n)
		// },
		//借助mapMutation生成对应的方法，方法中会调用commit去联系mutations(对象写法)
		...mapMutations('countAbout', { increment: 'JIA', decrement: 'JIAN' }),
		//借助mapMutation生成对应的方法，方法中会调用commit去联系mutations(数组写法)
		//...mapMutations(['JIA','JIAN'])

		// incrementOdd() {
		// 	if (this.$store.state.sum % 2) {
		// 		this.$store.dispatch('jiaOdd', this.n)
		// 	}
		// },
		// incrementWait() {
		// 	setTimeout(() => {
		// 		this.$store.dispatch('jiaWait', this.n)
		// 	}, 500)
		// },
		//借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
		...mapActions('countAbout', {
			incrementOdd: 'jiaOdd',
			incrementWait: 'jiaWait',
		}),
		//借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)
		//...mapActions(['jiaOdd', 'jiaWait']),
	},
	computed: {
		//尚硅谷vue p112
		//借助mapState生成计算属性:sum、school、subject(对象方法一)
		...mapState('countAbout', {
			sum: 'sum',
			school: 'school',
			subject: 'subject',
			personList: 'personList',
		}),
		...mapState('personAbout', {
			personList: 'personList',
		}),
		//借助mapState生成计算属性:sum、school、subject(数组方法一)
		//...mapState(['sum', 'school', 'subject','personList']),

		//借助mapGetters生成计算属性：bigSum（对象写法一）
		//...mapGetters({ bigSum: 'bigSum' }),
		//借助mapGetters生成计算属性：bigSum（数组写法二）
		...mapGetters('countAbout', ['bigSum']),
	},
}
</script>

<style>
button {
	margin-left: 5px;
}
</style>
