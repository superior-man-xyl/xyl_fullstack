"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultErrorHandler = void 0;
const defaultErrorHandler = (error, request, response, next) => {
    if (error.message) {
        console.log(error.message, '------');
    }
    let statusCode, message;
    switch (error.message) {
        case 'NAME_IS_REQUIRED':
            statusCode = 400;
            message = '请提供用户名';
            break;
        case 'PASSWORD_IS_REQUIRED':
            statusCode = 400;
            message = '请提供密码';
            break;
        case 'USER_ALREADY_EXSIT':
            statusCode = 409;
            message = '用户名已被占用';
            break;
        case 'USER_DOES_NOT_EXIT':
            statusCode = 400;
            message = '用户不存在';
            break;
        case 'USER_DOES_NOT_OWN_RESOURCE':
            statusCode = 403;
            message = '您不能处理内容';
            break;
        case 'NOT_FOUND':
            statusCode = 404;
            message = '未找到';
            break;
        case 'UNAUTHORIZED':
            statusCode = 401;
            message = "请先登陆";
            break;
        default:
            statusCode = 500;
            message = '运维小哥正在抢修中。。。';
            break;
    }
    response.status(statusCode).send({ message });
};
exports.defaultErrorHandler = defaultErrorHandler;
//# sourceMappingURL=app.middleware.js.map