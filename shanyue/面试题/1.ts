//山月老师的面试题。记得每天刷几道
//interface:接口   type自定义类型   ts基础
export type User ={
    name:string,
    age:number,
    occupation:string
};//export type User =unknown 自定义了一个类型unknow

export const users:User[]=[//ts类型的约束，每个元素必须满足类型约束
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
];

export function logPerson(user:User){
    console.log(`- ${user.name},${user.age}`);
}

console.log("Users");
users.forEach(logPerson);