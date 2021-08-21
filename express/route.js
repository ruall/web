const express = require('express')
const {response, request} = require("express");

const app = express();

app.get('/', (request, response) => {
    response.send('路由页面');
})

app.get('/admin', (request, response) => {
    response.send('后台页面');
})

app.listen(80)