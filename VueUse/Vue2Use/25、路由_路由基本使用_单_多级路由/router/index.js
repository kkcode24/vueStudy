//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
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
					//此处一定不要带斜杠，写出/news
					path: 'message',
					component: Message,
				},
			],
		},
	],
})
export default router
