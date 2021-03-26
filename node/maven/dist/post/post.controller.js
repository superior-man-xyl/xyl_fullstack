"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const post_service_1 = require("./post.service");
const store = async (request, response) => {
    console.log(request.body, '//////////////////////');
    const { title, content } = request.body;
    const data = await post_service_1.createPost({ title, content
    });
    response.status(201).send('保存成功');
};
exports.store = store;
//# sourceMappingURL=post.controller.js.map