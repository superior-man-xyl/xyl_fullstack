"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const app_config_1 = require("./app/app.config");
const mysql_1 = require("./app/database/mysql");
mysql_1.connection.connect(error => {
    if (error) {
        console.log('连接数据库服务失败', error.message);
        return;
    }
    console.log('成功连接到数据库服务');
});
app_1.default.listen(app_config_1.APP_PORT, () => {
    console.log('服务已启动');
});
//# sourceMappingURL=main.js.map