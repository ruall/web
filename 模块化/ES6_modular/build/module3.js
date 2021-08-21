'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * 使用【统一暴露】
 * */
var school = 'aaa';
var person = {
    name: 'a',
    age: 19,
    sex: '女'
};

function getLaoliu() {
    console.log(person);
}

//统一暴露(精简版)
exports.school = school;
exports.person = person;
exports.getLaoliu = getLaoliu;

//统一暴露（完整版）
// export {school as a, person as b, getLaoliu as c}