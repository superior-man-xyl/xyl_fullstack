"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserData = exports.hashPassword = void 0;
const userService = __importStar(require("./user.service"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const hashPassword = async (request, response, next) => {
    const { password } = request.body;
    request.body.password = await bcrypt_1.default.hash(password, 10);
    next();
};
exports.hashPassword = hashPassword;
const validateUserData = async (request, response, next) => {
    console.log('验证用户数据');
    const { name, password } = request.body;
    console.log(name, password);
    if (!name) {
        next(new Error('NAME_IS_REQUIRED'));
    }
    if (!password) {
        next(new Error('PASSWORD_IS_REQUIRED'));
    }
    const user = await userService.getUserByName(name);
    if (user) {
        return next(new Error('USER_ALREADY_EXSIT'));
    }
    next();
};
exports.validateUserData = validateUserData;
//# sourceMappingURL=user.middleware.js.map