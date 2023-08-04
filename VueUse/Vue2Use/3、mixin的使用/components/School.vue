<template>
	<div>
		<h2 @click="showName">学校名称：{{ name }}</h2>
		<h2>学校地址：{{ address }}</h2>
	</div>
</template>

<script>
//引入一个hunhe
import { hunhe, hunhe2 } from '../mixin'

export default {
	name: 'School',
	data() {
		return {
			name: '尚硅谷',
			address: '北京',
			/**
             * 备注
               1.组件和混入对象含有同名选项时，
               这些选项将以恰当的方式进行“合并”，
               在发生冲突时以组件优先
             */
			x: 666,
		}
	},
	mixins: [hunhe, hunhe2], // 局部混入
}
</script>
