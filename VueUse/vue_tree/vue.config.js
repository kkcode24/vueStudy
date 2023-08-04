/** 
module.exports = {
	// 关闭eslint校验.
	// devServer: {
	// 	// overlay: {
	// 	// 	warnings: false, //不显示警告
	// 	// 	errors: false, //不显示错误
	// 	// },
	// 	proxy: {
	// 		'/ailuo': {
	// 			//匹配所有以'./api1'开头的请求路径
	// 			target: 'http://localhost:5000', //代理目标的基础路径
	// 			pathRewrite: { '^/ailuo': '' }, //代理后往后端服务器的请求取掉/ailuo前缀
	// 			ws: true, //webSocket
	// 			changOrigin: true, //隐藏真实端口路径
	// 		},
	// 	},
	// },
	//开启代理服务器（方式二）
	devServer: {
		proxy: {
			'/api1': {
				target: 'http://localhost:5000',
				pathRewrite: { '^/api1': '' },
				ws: false, //用于支持websocket,默认值为true
				// changeOrigin: true //用于控制请求头中的host值,默认值为true
			},
			'/api2': {
				target: 'http://localhost:5001',
				pathRewrite: { '^/api2': '' },
			},
		},
	},
	lintOnSave: false, //关闭eslint检查
	pages: {
		index: {
			entry: 'src/main.js', // 入口
		},
	},
}

*/
module.exports = {
	lintOnSave: false,
	// 开启代理服务器（方式一）
	// devServer: {
	//     proxy:'http://localhost:5000'
	// }
}
