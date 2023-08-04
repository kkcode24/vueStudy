<template>
	<ul>
		<li>消息编号：{{ id }}</li>
		<li>消息标题：{{ joke }}</li>
		<!-- <li>a:{{ a }} b:{{ b }}</li> -->
	</ul>
</template>

<script>
export default {
	name: 'Detail',
	//第一种写法：值为对象
	//该对象中的所有key-value都会以props的形式传给Detail组件
	// props: ['a', 'b'],

	//第二种写法：值为布尔值
	//若布尔值为真，会把该路由组件收到的params参数，以props的形式传给Detail组件
	props: ['id', 'joke'],
	mounted() {
		console.log(this.$route)
	},
}
</script>
