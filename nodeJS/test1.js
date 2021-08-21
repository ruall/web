/**
 * 打印直角三角形
 * */
for (let i = 1; i <= 5; i++) {
    let res = '';
    for (let j = 1; j <= i; j++) {
        res += '*'
    }
    console.log(res)
}

/*  *       1  1  4    i   5+i-1  5-i
   ***      2  3  3    2   6
  *****     3  5  2    3   7
 *******    4  7  1    4   8
*********   5  9  0*/

for (let i = 1; i <= 5; i++) {
    let res = [];
    for (let j = 1; j <= 2 * i - 1; j++) {
        res.push('*')
    }
    for (let k = 1; k <= 5 - i; k++) {
        res.unshift(' ')
    }
    console.log(res.join(""))
}


/**
 * 打印9x9乘法表
 * */
for (let k = 1; k <= 9; k++) {
    let res = '';
    for (let h = 1; h <= k; h++) {
        res += `${h} x ${k} == ${h * k}  `
    }
    console.log(res)
}