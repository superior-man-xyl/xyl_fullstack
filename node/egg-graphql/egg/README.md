后端node / api 开发， Restful
一切皆资源，资源的状态转换 名词，CRUD 不同的HTTP 动词 来应对
但是，虽然现在还是主流， 已经有代替方案， 更高前端数据需求的GraphQL 来了
要养成代码洁癖

1. egg.js + mysql CRUD 做出来 RESTFUL  /users 用户列表
    - mysql 驱动插件 plugins 很好用 
    mysql2 更方便的驱动mysql
    sequelize cli 从生成列表到数据迁移-》model 合成
2. egg.js + graphql 更加有成效

- 插件及配置的方式，将mysql的操作交给sequelize来处理
- 数据库创建
- 数据迁移，建表，加种子数据，都不需要写sql
    加速 我们要会mysql，但是还是要把任务交给专业的数据库工程师DBA
    sequence可以让我们更加规范数据库的操作流程，且更加简单

    yarn add mysql2 egg-sequelize
    yarn add sequelize-cli
- sequelize-cli 规范数据库迁移的工作
    命令行工具, 写命令

- 数据库开发的时候，建表后加点假数据 模型文件 mvc 
sequelize 规范 migrations 一切操作留下痕迹，以后有没有加字段，为什么要加 像git一样留下版本

npx sequelize init:config

- sequelize 有几步
    init:config 初始化得到配置文件
    init:migrations migrations文件夹

    npx sequelize init:migrations

   npx sequelize migration:generate --name=init-users  为了留下记录
   数据库迁移，加表，加字段

    npx sequelize db:migrate 执行迁移
    只要复杂，我们创建表只要写 JSON就可以
    npx sequelize db:migrate:undo
