- 为什么在SPA后还要SSR
SPA的好处是显示后切页面更快 不用重新刷新
SPA 还有什么缺点？ - 首屏慢（因为要执行js来挂载DOM）

Server Side Rendering   -> 因为有了Virtual DOM到底是在浏览器端渲染还是服务器端渲染都是一样的，只要返回虚拟DOM的js数据结构 
使拥有跨平台的能力，
1. 服务器端就生成HTML，传输出去，解决SEO问题
2. 