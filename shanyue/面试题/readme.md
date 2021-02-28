1. type是为什么诞生的？
ts 就是在js的基础上，做一些类型相关的约定
    如1.ts  users forEach
    严谨一些
     {
       //缺少数据name，数据不严谨
        age:18,
        occupation:"Chinese sweep"
    },
    {
        name:"jack2",
        age:18,
        occupation:"Astrouaut"
    },
    数据是users每个用户的数据不一致(缺少数据)的话forEach会出现问题(列出undefined等)

    - ts可以提前分析js里容易发生错误的地方，
    用接口或自定义类型来严格要求
    - 数据源都给他加上自定义类型定义
    - unknown是ts的关键字
    - ? 表示有或者没有都行   role?:string
    - |类型
    在user表这种类型，有一两个字段是不一样的，我们可以通过定义子类型，使用|拼接起来。实现类型的二选一``export type Person=User|Admin;``
    - 泛型 <>  去做类型的推导
    - key in 也可以避免混合类型的问题