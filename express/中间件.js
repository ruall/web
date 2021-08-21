const express = require('express')
const {request, response} = require("express");

const app = express()

//1-引入body-parser
let bodyParser = require('body-parser')
//2-使用bodyParser
app.use(bodyParser.urlencoded({extended: false}))

//1、静态资源服务中间件
app.use(express.static('./public'))

//2、请求体参数的获取 中间件 body-parser
app.get('/form', (request, response) => {
    //将某个文件中的内容响应
    response.sendFile(__dirname + '/form.html')
})

app.post('/login', (request, response) => {
    //3-request.body 获取请求体中的某个属性
    console.log(request.body)
    response.send('请求体接受完毕')
})

app.listen(80, () => {
    console.log('服务已经启动...80端口监听中...')
})