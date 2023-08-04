//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'
//避免多次点击前进后退，报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
	return VueRouterPush.call(this, to).catch((err) => err)
}
//创建一个路由器
const router = new VueRouter({
	mode: 'hash',
	//mode: 'history',
	routes: [
		{
			name: 'yuanyu',
			path: '/about',
			component: About,
			meta: { title: '关于' },
		},
		{
			name: 'zhuye',
			path: '/home',
			component: Home,
			meta: { title: '主页' },
			//通过children配置子级路由
			children: [
				{
					name: 'xinwen',
					//此处一定不要带斜杠，写出/news
					path: 'news',
					component: News,
					meta: { isAuth: true, title: '新闻' },
					//独享路由守卫beforeEnter
					/* beforeEnter: (to, from, next) => {
						console.log('独享路由守卫路由守卫', to, from)
						if (to.meta.isAuth) {
							if (localStorage.getItem('school') === 'toyo') {
								next()
							} else {
								alert('学校名不对，无权限查看！')
							}
						} else {
							next()
						}
					}, */
				},
				{
					name: 'xiaoxi',
					//此处一定不要带斜杠，写出/message
					path: 'message',
					component: Message,
					meta: { isAuth: true, title: '消息' },
					children: [
						{
							name: 'detail', // name配置项为路由命名
							//此处一定不要带斜杠，写出/news
							// path: 'detail/:id/:joke',
							path: 'detail',
							component: Detail,
							meta: { title: '详情' },
							//props的第一种写法,值为对象
							//该对象中的所有key-value都会以props的形式传给Detail组件
							//props: { a: 1, b: 'hello' },

							//props的第二种写法，值为布尔值
							//若布尔值为真，会把该路由组件收到的params参数，以props的形式传给Detail组件
							//注意：必须为params参数
							// props: true,

							//props的第三种写法:值为函数
							props($route) {
								return {
									id: $route.query.id,
									joke: $route.query.joke,
								}
							},
						},
					],
				},
			],
		},
	],
})

//全局前置路由守卫——初始化的时候被调用、每次路由切换之前被调用
/**
router.beforeEach((to, from, next) => {
	//console.log('前置路由守卫', to, from)
	if (to.meta.isAuth) {
		if (localStorage.getItem('school') === 'toyo') {
			next()
		} else {
			alert('学校名不对，无权限查看！')
		}
	} else {
		next()
	}
})
*/

//全局后置路由守卫——初始化的时候被调用、每次路由切换之后被调用

/* router.afterEach((to, from) => {
	console.log('后置路由守卫', to, from)
	document.title = to.meta.title || '陈大大'
}) */

export default router
