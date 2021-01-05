//TS写1.js的内容,TS像Java一样限定类型
const getUserInfoWithTs = (user:{name:string, age: number}):string => `name:${user.name} age: ${user.age}` 

console.log(getUserInfoWithTs({name: 'kaola', age:21}))
//运行时使用  tsc 2.ts 生成 2.js 最后 node 2.js