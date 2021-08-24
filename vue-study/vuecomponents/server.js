const express = require('express')
const app = express();

app.get('/user/info', (req, res) => {
    let response = {
        status: 200,
        data: {
            name: 'aa',
            age: 18
        }
    }
    res.send(response);
})

app.listen(3000, () => {
    console.log('服务已经启动... 端口3000监听中...')
})