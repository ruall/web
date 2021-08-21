const express = require('express')
const {request, response} = require("express");

const router = express.Router()

router.get('/admin', (request, response) => {
    response.send('<h1>后台首页</h1>')
})

router.get('/logout', (request, response) => {
    response.send('<h1>退出登录</h1>')
})

module.exports = router