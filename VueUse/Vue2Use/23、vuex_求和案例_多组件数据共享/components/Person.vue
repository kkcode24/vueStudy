<template>
	<div>
		<h1>人员列表</h1>
		<h3>Count组件求和为:{{ sum }}</h3>
		<input type="text" placeholder="请输入名字" v-model="name" />
		<button @click="add">添加</button>
		<ul>
			<li v-for="(p, index) in personList" :key="p.id">
				{{ p.name }}
			</li>
		</ul>
	</div>
</template>
<script>
import { nanoid } from 'nanoid'
import { mapState } from 'vuex'
export default {
	name: 'Person',

	data() {
		return {
			name: '',
		}
	},

	computed: {
		/**
        方法一：
		personList() {
			return this.$store.state.personList
		},
		sum() {
			return this.$store.state.sum
		},
        */
		/**方法二 */
		...mapState(['personList', 'sum']),
	},

	methods: {
		add() {
			if (this.name === '') return
			const personObj = { id: nanoid(), name: this.name }
			this.$store.commit('ADD_PERSON', personObj)
			this.name = ''
		},
	},
}
</script>
