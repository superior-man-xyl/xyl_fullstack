type IUserInfoFunc=(user:IUser)=>string
//接口是指一个接口类，自定义类型指的是重新定义一个类
interface IUser{
    name:string,
    age:number
}

const getUserInfoWithType:IUserInfoFunc=(user)=>{
    return `name:${user.name},age:${user.age}`;
}

getUserInfoWithType({name:'koala',age:18})