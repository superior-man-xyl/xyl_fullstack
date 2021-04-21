const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const path = require('path');
const babel = require('@babel/core')

const getModuleInfo = (file) => {
    const body = fs.readFileSync(file, 'utf-8');
    // console.log(body)
    const ast = parser.parse(body, {
        sourceType: 'module' //表示我们要解析的是ES模块
    })
    // console.log(ast.program.body);
    const deps = {} //用来装依赖（也就是文件路径）
    traverse(ast, { //依赖收集
        ImportDeclaration({
            node
        }) {
            const dirname = path.dirname(file);
            const abspath = './' + path.join(dirname, node.source.value)
            deps[node.source.value] = abspath
        }
    })
    // console.log(deps);//{ './add.js': './src\\add.js', './minus.js': './src\\minus.js' }
    //ES6->ES5
    const {
        code
    } = babel.transformFromAst(ast, null, { //将es6的抽象语法树转为es5的抽象语法树,再转为es5代码
        presets: ['@babel/preset-env']
    })

    // console.log(code);//看看转换后代码

    //获取所有的依赖
    const moduleInfo = {
        file,
        deps,
        code
    }
    return moduleInfo

}
//需要一个递归的方法
const parseModules = (file) => {
    const entry = getModuleInfo(file)
    const temp = [entry]
    const depsGraph = {};
    for (let i = 0; i < temp.length; i++) {
        const deps = temp[i].deps
        if (deps) {
            for (const key in deps) { // ['./add.js':'./src/add.js']
                if (deps.hasOwnProperty(key)) {
                    temp.push(getModuleInfo(deps[key])) //递归去做依赖获取
                }
            }
        }
    }
    // console.log(temp);

    temp.forEach(moduleInfo => {
        depsGraph[moduleInfo.file] = {
            deps: moduleInfo.deps,
            code: moduleInfo.code
        }
    })

    // console.log(depsGraph)
    return depsGraph
}
//将多个js文件合并为一个
const bundle = (file) => {
    const depsGraph = JSON.stringify(parseModules(file))
    return `(function(graph){
        function require(file){
        function absRequire(relPath){
            return require(graph[file].deps[relPath])
        }
        var exports={}
        (function(require,exports,code){
            eval(code)
        })(absRequire,exports,graph[file].code)
    }
    require('${file}')
    })(${depsGraph})`
}

const content = bundle('./src/index.js')
console.log(content)
parseModules('./src/index.js')

fs.mkdirSync('./dist')//创建一个dist文件夹
fs.writeFileSync('./dist/bundle.js',content)//将content写入dist下的bundle.js里

//得到下面一个自执行函数，就是把所有的js文件都合并后的
// (function (graph) {
//     function require(file) {
//         function absRequire(relPath) {
//             return require(graph[file].deps[relPath])
//         }
//         var exports = {}
//             (function (require, exports, code) {
//                 eval(code)
//             })(absRequire, exports, graph[file].code)
//     }
//     require(. / src / index.js)
// })({
//         "./src/index.js": {
//             "deps": {
//                 "./add.js": "./src\\add.js",
//                 "./minus.js": "./src\\minus.js"
//             },
//             "code": "\"use strict\";\n\nvar _add = _interopRequireDefault(require(\"./add.js\"));\
//             n\ nvar _minus = require(\"./minus.js\");\n\nfunction _interopRequireDefault(obj)  {
//                     return obj && obj.__esModule ? obj : {
//                             \
//                             "default\": obj }; }\n\nvar sum = (0, _add[\"default\"])(1, 2);\
//                             nvar division = (0, _minus.minus)(2, 1);\nconsole.log(sum);\nconsole.log(division);
//                             "},". / src\\ add.js ":{"
//                             deps ":{},"
//                             code ":"\
//                             "use strict\";\
//                             n\ nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\
//                                 n\ nvar _default = function _default(a, b) {
//                                     \n
//                                     return a +b;\n
//                                 };\ n\ nexports[\"default\"] = _default;"
//                                 }, "./src\\minus.js": {
//                                     "deps": {},
//                                     "code": "\"use strict\";\
//                                     n\ nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.minus = void 0;\
//                                         n\ nvar minus = function minus(a, b) {
//                                             \
//                                             n
//                                             return a - b;\
//                                             n
//                                         };\ n\ nexports.minus = minus;
//                                         "}})