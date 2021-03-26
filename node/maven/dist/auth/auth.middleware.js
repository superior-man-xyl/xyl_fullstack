"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authGard = void 0;
const authGard = (request, response, next) => {
    console.log('到auth一游，验证用户身份');
    next(new Error('UNAUTHORIZED'));
};
exports.authGard = authGard;
//# sourceMappingURL=auth.middleware.js.map