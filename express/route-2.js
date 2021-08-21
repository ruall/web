const express = require('express')
const fs = require('fs')
const {request, response} = require("express");

const app = express()

app.get('/login', (request, response) => {
    // response.send('登录页面')
    const body = fs.readFileSync('./form.html')
    response.end(body)
})

app.get('/register', (request, response) => {
    response.send('注册页面')
})

app.post('/login', (request, response) => {
    response.send('登录处理')
})

app.all('/test', (request, response) => {
    //响应状态码
    response.statusCode = 400
    // response.status(500)
    //响应状态字符串
    response.statusMessage = 'ceshi'
    //设置响应头
    // response.set('week', '3')
    response.setHeader('week', '3')
    response.setHeader('Content-type', 'text/html;charset=urf-8')
    //响应体
    response.write('Hello')
    //设置响应
    response.end('测试')

    //下载响应
    // response.download('./form.html')
    //将一个文件中的内容响应给浏览器（必须为绝对路径）
    // response.sendFile(__dirname + './form.html')
    //跳转
    // response.redirect('https://www.baidu.com')
})

app.get('/introduce', (request, response) => {
    const body = fs.readFileSync('./intro.html')
    response.end(body)
})

app.get('/news/:id.html', (request, response) => {
    let id = request.params.id
    console.log(id);
    response.send(`id为${id}的新闻`)
})

app.listen(80)