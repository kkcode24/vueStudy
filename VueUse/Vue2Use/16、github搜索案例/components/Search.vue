<template>
	<section class="jumbotron">
		<h3 class="jumbotron-heading">Search Github Users</h3>
		<div>
			<input
				type="text"
				placeholder="enter the name you search"
				v-model="keyword"
			/>&nbsp;<button @click="searchUsers">Search</button>
		</div>
	</section>
</template>
<script>
import axios from 'axios'
export default {
	name: 'Search',
	data() {
		return {
			keyword: '',
		}
	},
	methods: {
		searchUsers() {
			//请求前更新list数据
			this.$bus.$emit('updataListData', {
				isFirst: false,
				isLoading: true,
				errMsg: '',
				users: [],
			})
			axios
				.get(`https://api.github.com/search/users?q=${this.keyWord}`)
				.then(
					(response) => {
						console.log('请求成功了', response.data.items)
						this.$bus.$emit('updataListData', {
							isLoading: false,
							errMsg: '',
							users: response.data.items,
						})
					},
					(error) => {
						this.$bus.$emit('updataListData', {
							isLoading: false,
							errMsg: error.message,
							users: [],
						})
					}
				)
		},
	},
}
</script>
