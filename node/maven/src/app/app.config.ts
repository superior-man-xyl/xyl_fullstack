// require('dotenv').config() // 默认读取项目根目录下的.env文件得到process  下面展开了而已
import dotenv from 'dotenv';
dotenv.config();//在Node.js程序启动时运行，会得到process.env
// console.log(process.env);
// www.baidu.com:端口号  为什么百度这样的不要指定端口
// 因为nginx的访问代理
export const {APP_PORT}=process.env;
export const {MYSQL_HOST,//解构出env里的端口号
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE
}=process.env