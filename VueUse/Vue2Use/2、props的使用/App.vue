<!-- 
props让组件接收外部传过来的数据 
●传递数据<Demo name="xxx" :age="18"/>这里age前加:，通过v-bind使得里面的18是数字
●接收数据
 第一种方式（只接收）props:['name', 'age'] 
 第二种方式（限制类型）props:{name:String, age:Number}
 第三种方式（限制类型、限制必要性、指定默认值） 
 -->
<template>
	<div>
		<Student name="李四" sex="女" :age="18" />
		<Student name="王五" sex="男" :age="18" />
	</div>
</template>

<script>
import Student from './components/Student'

export default {
	name: 'App',
	components: { Student },
}
</script>
