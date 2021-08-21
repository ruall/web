'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//使用【分别暴露】
var teacher1 = exports.teacher1 = { name: 'A', age: 40 };
var teacher2 = exports.teacher2 = { name: 'B', age: 50

    //使用【统一暴露】
};var stu1 = { name: 'C', age: 18 };
var stu2 = { name: 'D', age: 20 };
exports.stu1 = stu1;
exports.stu2 = stu2;

//使用【默认暴露】

exports.default = {
    school: 'ABC',
    address: 'aaaaaaa',
    subjects: ['a', 'b', 'c']
};