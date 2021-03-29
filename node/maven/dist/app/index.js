"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_router_1 = __importDefault(require("../post/post.router"));
const user_router_1 = __importDefault(require("../user/user.router"));
const app_middleware_1 = require("./app.middleware");
const app = express_1.default();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(post_router_1.default, user_router_1.default);
app.use(app_middleware_1.defaultErrorHandler);
exports.default = app;
//# sourceMappingURL=index.js.map