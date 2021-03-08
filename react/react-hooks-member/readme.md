# react+ts

1.logo
webpack是打包工具
一切静态资源都可以打包

2. DisplayData  更加安全
ts 展示数据
- 异步/同步  Promise怎么在ts里写
- api 模块
- ts model

members 数组
js->[]  ts-> type[]

3. 面试官问react项目的目录架构，怎么理解
小项目，每那么多要求， webpack index.ts入口文件-》App-》Component
大型项目，react全家桶组织起来，mvvm->SPA router + 数据管理redux,
每个文件管理一类功能与需求
/api  请求的管理
/pages 自定义组件
/model ts 独有的，对所有的数据做interface

ts+react api
1. 组件里要有数据 生命周期来请求  
2. /api 提供了 members.fetchMember
3. 返回的是thenable的数据 
4. api 定义的时候 Prmise.resolve(data) thenable return data 
5. ts 要对api 请求方法做类型的检 返回值
:Promise<MemberEntity[]>
6. model 提供了对 MemberEntity定义