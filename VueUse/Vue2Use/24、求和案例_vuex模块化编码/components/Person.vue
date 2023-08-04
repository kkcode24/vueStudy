<template>
	<div>
		<h1>人员列表</h1>
		<h3>Count组件求和为:{{ sum }}</h3>
		<h3>列表中第一个人的名字是：{{ firstPersonName }}</h3>
		<input type="text" placeholder="请输入名字" v-model="name" />
		<button @click="add">添加</button>
		<button @click="addWang">添加一个姓王的人</button>
		<button @click="addPerson">随机添加一个笑话</button>
		<ul>
			<li v-for="(p, index) in personList" :key="p.id">
				<span v-html="p.name"></span>
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
         */
		personList() {
			return this.$store.state.personAbout.personList
		},
		sum() {
			return this.$store.state.personAbout.sum
		},
		firstPersonName() {
			return this.$store.getters['personAbout/firstPersonName']
		},

		/**方法二 
		...mapState(['personList', 'sum']),
        */
	},

	methods: {
		add() {
			if (this.name === '') return
			const personObj = { id: nanoid(), name: this.name }
			this.$store.commit('personAbout/ADD_PERSON', personObj)
			this.name = ''
		},
		addWang() {
			if (this.name === '') return
			const personObj = { id: nanoid(), name: this.name }
			this.$store.dispatch('personAbout/add_personWang', personObj)
			this.name = ''
		},
		addPerson() {
			this.$store.dispatch('personAbout/addPersonServer')
		},
	},
}
</script>
