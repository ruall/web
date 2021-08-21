/**
 * 1、安装express
 *    npm i express
 * */

/**
 * 2、引入express包
 * */
const express = require('express')
const {request, response} = require("express");


//3、创建应用对象
const app = express()

// //4、路由的设置
app.get('/', (request, response) => {
    //设置响应
    response.end('Hello Express')
})


//5、监听端口  启动服务
app.listen(80, () => {
    console.log('服务已经启动... 端口80监听中...')
})