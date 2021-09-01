(() => {
    //基础数据类型

    //boolean 类型
    let flag: boolean = true
    console.log(flag);

    //数字
    let num: number = 10
    console.log(num);

    //字符串
    let str: string = '小明'
    console.log(str);

    //null 和 undefined

    //数组
    let arr: number[] = [10, 20, 30]
    console.log(arr);
    //通过泛型来定义数组
    let arr2: Array<number> = [10, 20, 30]
    console.log(arr2);
    //通过元组类型定义数组
    let arr3: [number, string] = [111, '张三']
    console.log(arr3);

    //枚举类型
    enum Gender {
        女,
        男
    }

    let g1: Gender = Gender.女
    let g2: Gender = Gender.男
    console.log(g1);
    console.log(g2);

})()