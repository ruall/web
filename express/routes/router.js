//1、引入express包
const express = require('express')
const {request, response} = require("express");

//2、创建路由器对象，router是一个微型app对象
const router = express.Router()

//3、修改路由
router.get('/home', (request, response) => {
    response.send('home页面')
})

router.get('/home.html', (request, response) => {
    response.send('<h1>home.html</h1>');
})

router.post('/login', (request, response) => {
    response.send('登录处理')
})

router.get('/news/:id.html', (request, response) => {
    let id = request.params.id
    console.log(id);
    response.send(`id为${id}的新闻`)
})

//4、暴露router对象
module.exports = router