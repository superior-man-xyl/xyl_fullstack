import mysql from 'mysql2';//这是一个mysql的驱动

import{
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE,
}from '../../app/app.config'

export const connection=mysql.createConnection({//mysql提供的API
    host:MYSQL_HOST,
    port:parseInt(MYSQL_PORT,10),
    user:MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE
});