//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'
//创建一个路由器
const router = new VueRouter({
	routes: [
		{
			path: '/about',
			component: About,
		},
		{
			path: '/home',
			component: Home,
			//通过children配置子级路由
			children: [
				{
					//此处一定不要带斜杠，写出/news
					path: 'news',
					component: News,
				},
				{
					//此处一定不要带斜杠，写出/message
					path: 'message',
					component: Message,
					children: [
						{
							name: 'detail', // name配置项为路由命名
							//此处一定不要带斜杠，写出/news
							// path: 'detail/:id/:joke',
							path: 'detail',
							component: Detail,

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
export default router
