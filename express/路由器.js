//引入express包
const express = require('express')
//创建应用对象
const app = express()

//引入router
const router = require('./routes/router')
const adminRouter = require('./routes/admin')

//配置网站根目录
app.use(express.static(__dirname + '/public'))

//设置router
app.use(router, adminRouter)

//1、创建一个routes文件夹
//2、创建单独的文件 router.js
//3、修改router.js中代码(四步)
//4、在主文件中引入router.js
//5、app.use设置中间件

app.listen(80, () => {
    console.log('服务已经启动...80端口监听中...')
})