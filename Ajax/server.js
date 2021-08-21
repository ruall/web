const express = require('express')
const {request, response} = require("express");

const app = express()
//使用中间件解析urlencoded编码形式的请求体参数
// app.use(express.urlencoded({extended: true}))

//使用中间件解析json编码形式的请求体参数
app.use(express.json())

//暴露静态资源
app.use(express.static(__dirname + '/src'))


app.get('/test_get', (request, response) => {
    response.send('hello_test_get')
})

app.get('/get_person', (request, response) => {
    const person = {name: '老刘', age: 18, sex: '女'}
    response.send(person)
})

app.get('/get_person_delay', (request, response) => {
    const person = {name: '张三', age: 20, sex: '女'}
    setTimeout(function () {
        response.send(person)
    }, 3000)
})

app.get('/test_jquery_get/:city', (request, response) => {
    const car = {name: 'byd', price: '25w'}
    console.log(request.query, request.params);
    response.send(JSON.stringify(car))
})

app.post('/test_jquery_post', (request, response) => {
    const car = {name: 'byd', price: '25w'}
    console.log(request.body);
    response.send(JSON.stringify(car))
})


// app.post('/test_post/:name1/:age1', (request, response) => {
app.post('/test_post', (request, response) => {
    // console.log(request.query);
    // console.log(request.params);
    console.log(request.body);
    response.send('hello_test_post')
})

app.get('/test_jsonp', (request, response) => {
    const {callback} = request.query
    const car = {name: 'byd', price: '25w'}
    response.send(`${callback}(${JSON.stringify(car)})`)
})

app.get('/test_cors', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Expose-Headers', '*')
    response.send('hello_test_get')
})

app.options('/test_put', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Expose-Headers', '*')
    response.setHeader('Access-Control-Allow-Methods', '*')
    response.send()
})

app.put('/test_put', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Expose-Headers', '*')
    response.send('hello_test_put')
})

app.listen(8080, (err) => {
    if (!err) {
        console.log('测试ajax请求服务器开启成功！');
        console.log('127.0.0.1:8080/ajax1.html')
    }

})