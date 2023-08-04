/**
 * 1功能：可以把多个组件共用的配置提取成一个混入对象 
   2.使用方式
   a.定义混入
   
 */
export const hunhe = {
	methods: {
		showName() {
			alert(this.name)
		},
	},
	mounted() {
		console.log('你好啊！')
	},
}

export const hunhe2 = {
	data() {
		return {
			x: 100,
			y: 200,
		}
	},
}
