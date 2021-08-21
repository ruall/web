const express = require('express')
const {request, response} = require("express");

const app = express()

app.get('/person', (request, response) => {
    response.send('getPerson')
})
app.post('/person', (request, response) => {
    response.send('postPerson')
})
app.put('/person', (request, response) => {
    response.send('putPerson')
})
app.delete('/person', (request, response) => {
    response.send('deletePerson')
})

app.listen(8090, (error) => {
    if (!error) {
        console.log('服务器开启成功...8090端口监听中...');
    }
})