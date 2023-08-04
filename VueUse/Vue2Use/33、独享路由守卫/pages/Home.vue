<template>
	<div>
		<h2>Home组件内容</h2>
		<div>
			<ul class="nav nav-tabs">
				<li>
					<router-link
						class="list-group-item"
						active-class="active"
						to="/home/news"
						>News</router-link
					>
				</li>
				<li>
					<router-link
						class="list-group-item"
						active-class="active"
						to="/home/message"
						>Message</router-link
					>
				</li>
			</ul>
			<!-- 缓存路由组件 -->
			<!-- include中保存的名字是组件名，即：Message为组件名 -->
			<!-- 缓存单个组件时 -->
			<!-- <keep-alive include="Message">
				<router-view></router-view
			></keep-alive> -->
			<!-- 缓存多个组件时 -->
			<keep-alive :include="['Message', 'News']">
				<router-view></router-view
			></keep-alive>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
}
</script>
