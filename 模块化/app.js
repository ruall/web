// 2、引入模块 这里不需要添加__dirname 但是./不能省略
const {add, div} = require('./m1.js')

console.log(add(1, 2));
console.log(div(1, 2));

const home = require('./libs')
console.log(home);