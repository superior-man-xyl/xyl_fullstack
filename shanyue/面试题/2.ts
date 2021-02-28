//数据是要类型化的，为了安全
//拿着数据去做一堆操作，为了不会出问题

//方法1
// export type User ={
//     name:string,
//     age:number,
//     occupation?:string//带问好就是不必要向
//     role?:string
// };
//方法2
interface User {/*设置为接口*/
    name:string;
    age:number;
    occupation:string;
};
interface Admin{
    name:string;
    age:number;
    role:string
}
export type Person=User|Admin;

// export const users:User[]=[//ts类型的约束，每个元素必须满足类型约束
export const users:Person[]=[
    {
        name:"jack1",
        age:18,
        occupation:"Chinese sweep"
    },
    {
        name:"jack2",
        age:18,
        occupation:"Astrouaut"
    },
    {
        name:"jack3",
        age:18,
        role:"主任"//role不报错了使用person后
    },
];

export function logPerson(user:Person){
    console.log(`- ${user.name},${user.age}`);
    let additionalInformation:string;
    //做一个类型推导
    // if((<Admin>user).role){
    if("role" in user){
        additionalInformation=(<Admin>user).role;
    }else{
        additionalInformation=(<User>user).occupation;
    }
}

console.log("Users");
users.forEach(logPerson);