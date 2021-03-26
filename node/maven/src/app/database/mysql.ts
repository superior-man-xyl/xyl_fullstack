import mysql from 'mysql2';//mysql配置
import {
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DATABASE,
    MYSQL_PASSWORD,
    MYSQL_USER} from '../app.config';//从app.config里获得解析出的数据


export const connection=mysql.createConnection({
    host:MYSQL_HOST,
    port:parseInt(MYSQL_PORT),
    user:MYSQL_USER,
    password:MYSQL_PASSWORD,//这样写，密码也会上传到github上，会泄密,使用库dotenv，它会读取.env文件，然后使env文件不被上传
    database:MYSQL_DATABASE
})