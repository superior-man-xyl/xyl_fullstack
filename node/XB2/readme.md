- yarn add express @types/express

- typescript tsc-watch 实时的进行编译

- 建立tsconfig.json   

- "scripts": {
    "dev":"tsc-watch --onSuccess \"node dist/main.js\""
  },

  里面要用双引号，就使用\转义字符  tsc-watch 会帮助编译dist 目录
使用npm run dev  运行后就会实时编译

- 引入express


过程：
1. 使用了express 启动了web后端服务，借助ts全面es6化，抛弃require，拥抱es6模块
2. 使用express 自带的路由创建路由中间件
3. 用户通过路由来到服务器，控制器接管一切
4. 控制器拿到用户请求和用户响应对象，将查询对象参数返回给用户
5. 以上都模块化， 即一个文件一个模块，例如post目录模块

根目录下新建个.env 里面放着配置-》dotenv 自动读取-》 模块化config目录-》app
.gitignore里 会有  .env 因为这是不能上传的，因为里面有密码的信息
.env=>.gitignore=>dotenv.config()=>process

yarn add mysql2   mysql的驱动以连接数据库

  mysql里创建数据库的命令: create database ravent;