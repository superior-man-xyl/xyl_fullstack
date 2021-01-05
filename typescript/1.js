// user类型是Object 包含name age
const getUserInfo=function(user){
    //判断,一堆的类型检查
    console.log(Object.keys(user).includes('name'))
    if(!user||typeof user!='object'||Object.keys(user)||Object.keys(user).includes('name')||Object.keys(user).includes('age'))
        throw new Error('参数错误')
    return `name:${user.name},age:${user.age}`
}
console.log(getUserInfo({name:'koala',age:18}));
//有什么问题？
console.log(getUserInfo({}));//传空对象也可，说明不够严谨，太随意了
//限制下这种随意性，加判断条件