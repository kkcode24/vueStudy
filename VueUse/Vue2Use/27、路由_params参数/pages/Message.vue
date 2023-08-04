<template>
	<div>
		<ul>
			<li v-for="m in messageList" :key="m.id">
				<!-- 跳转路由并携带query参数，to的字符串写法 -->
				<!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">
                      {{m.title}}
    				 </router-link>&nbsp;&nbsp; -->

				<!-- 跳转路由并携带query参数，to的对象写法 -->
				<!-- <router-link
					:to="{
						path: '/home/message/detail',
						query: {
							id: m.id,
							joke: m.joke,
						},
					}"
				>
					{{ m.joke }} </router-link
				>&nbsp;&nbsp; -->
				<!-- 通过name配置跳转路径 -->
				<!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">
                      {{m.title}}
    				 </router-link>&nbsp;&nbsp; -->
				<!-- <router-link
					:to="{
						name: 'detail',
						query: {
							id: m.id,
							joke: m.joke,
						},
					}"
				>
					{{ m.joke }} </router-link
				>&nbsp;&nbsp; -->

				<!-- 跳转路由并携带param参数，to的字符串写法 -->
				<!-- <router-link :to="`/home/message/detail/${m.id}/${m.joke}`">
					{{ m.joke }} </router-link
				>&nbsp;&nbsp; -->

				<!-- params传参只能使用name,不可使用path; -->
				<!-- 跳转路由并携带param参数，to的对象写法+name -->
				<router-link
					:to="{
						name: 'detail',
						params: {
							id: m.id,
							joke: m.joke,
						},
					}"
				>
					{{ m.joke }} </router-link
				>&nbsp;&nbsp;
			</li>
		</ul>
		<hr />
		<router-view></router-view>
	</div>
</template>

<script>
import axios from 'axios'
import { nanoid } from 'nanoid'
export default {
	name: 'Message',
	data() {
		return {
			messageList: [],
		}
	},
	mounted() {
		this.getTitile()
	},
	methods: {
		getTitile() {
			for (let i = 0; i < 3; i++) {
				axios.get('/duanzi/getduanzi').then(
					(response) => {
						const data = JSON.parse(response.data)
						const obj = {
							id: nanoid(),
							joke: data.duanzi,
						}
						// console.log(data)
						this.messageList.push(obj)
					},
					(error) => {
						// alert(error.message)
						return ''
					}
				)
			}
		},
	},
}
</script>
