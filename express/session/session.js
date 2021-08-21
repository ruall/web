const express = require('express')

const session = require('express-session')
const {request, response} = require("express");

const app = express()

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

//设置session，一般是用户在登录成功后会设置session
app.get('/set-session', (request, response) => {
    request.session.name = 'xiaoming'
    request.session.age = '18'
    response.send('登录成功')
})

//读取session
app.get('/get-session', (request, response) => {
    console.log('姓名：' + request.session.name);
    console.log('年龄：' + request.session.age);
    response.send('个人中心')
})

app.listen(80, () => {
    console.log('服务已经启动...80端口监听中...')
})