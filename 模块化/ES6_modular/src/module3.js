/**
 * 使用【统一暴露】
 * */
const school = 'aaa'
const person = {
    name: 'a',
    age: 19,
    sex: '女'
}

function getLaoliu() {
    console.log(person);
}

//统一暴露(精简版)
export {school, person, getLaoliu}

//统一暴露（完整版）
// export {school as a, person as b, getLaoliu as c}