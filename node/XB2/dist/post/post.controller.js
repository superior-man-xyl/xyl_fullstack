"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = void 0;
const show = async (request, response) => {
    const { postId } = request.params;
    response.send(`hello,post ,这里是文章${postId}`);
};
exports.show = show;
//# sourceMappingURL=post.controller.js.map