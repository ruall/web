'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showData = showData;
exports.showMsg = showMsg;
/**
 * module1中使用[分别暴露]
 * */
var data = exports.data = 'abc';
var msg = exports.msg = 'a,b,c';

function showData() {
    console.log(data);
}

function showMsg() {
    console.log(msg);
}