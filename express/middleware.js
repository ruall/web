const express = require('express')
const moment = require('moment')
const {request, response} = require("express");

const fs = require('fs')

const app = express()

//声明一个中间件函数 next是一个函数类型
let record = function (request, response, next) {
    //获取时间
    let time = moment().format('YYYY-MM-DD HH:mm:ss')
    //获取路径
    const path = request.url
    //拼接要写入的字符串
    let str = `[${time}] ${path}\r\n`
    //写入文件
    fs.writeFileSync('./access.log', str, {flag: 'a'})
    //调用next函数
    next()
}

//路由中间件
let checkUser = function (request, response, next) {
    //获取admin参数
    let isAdmin = request.query.admin
    //判断admin参数
    if (isAdmin === '1') {
        next()
    } else {
        //跳转到登录页面
        response.redirect('/login')
    }
}

//使用中间件 中间件的配置 (全局中间件)
app.use(record)

app.get('/', (request, response) => {
    response.send('中间件')
})
app.get('/login', (request, response) => {
    response.send('登录页面')
})
app.get('/admin', checkUser, (request, response) => {
    response.send('后台首页')
})
app.get('/setting', checkUser, (request, response) => {
    response.send('后台设置')
})

app.listen(80)