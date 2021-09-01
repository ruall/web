(() => {
    //定义一个接口
    interface Person {
        firstName: string
        lastName: string
    }

    //定义一个函数，参数是Person类型
    function showPerson(person: Person) {
        console.log(person.firstName + '--' + person.lastName);
    }

    //定义一个对象
    let per = {
        firstName: '李',
        lastName: '四',
        color: 'pink'
    }
    //调用函数
    showPerson(per)


    //创建类---User
    class User {

        //定义属性
        name: string
        age: number

        //构造方法
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
    }

    //实例化对象
    let u: User = new User('张三', 18)
    console.log(u);
})()