import dotenv from 'dotenv';
dotenv.config();

// console.log(process.env);

// 和在package.json里写SET PORT = 1234 && node app.js cross-env类似
export const { 
    APP_PORT,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE } = process.env;//