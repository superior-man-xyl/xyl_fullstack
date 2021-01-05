//interface 接口 设计模式 面向接口的编程
//user 要满足一个接口，接口定义方法和属性
interface IUser{//定义接口
    name:string,
    age:number
}
const getUserInfoWithInterface=(user:IUser):string=>{
    return `name:${user.name},age:${user.age}`
}
getUserInfoWithInterface({name:'koala',age:18})//当空对象时报错，类型“{}”的参数不能赋给类型“IUser”的参数。类型“{}”缺少类型“IUser”中的以下属性: name, agets(2345)