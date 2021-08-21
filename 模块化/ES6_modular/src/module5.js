//使用【分别暴露】
export const teacher1 = {name: 'A', age: 40}
export const teacher2 = {name: 'B', age: 50}

//使用【统一暴露】
const stu1 = {name: 'C', age: 18}
const stu2 = {name: 'D', age: 20}
export {stu1, stu2}


//使用【默认暴露】
export default {
    school: 'ABC',
    address: 'aaaaaaa',
    subjects: ['a', 'b', 'c']
}