/**
 * 
 * @author xyl
 * @param {any} o 
 * @param {string} type
 * @return boolean 
 */
// 判断某变量的类型
const isTypeof=(o,type)=>{
    //加入判断
    if(['number','string','boolean','function'].indexOf(type)>0){
        //typeof关键字用于判断数据类型
    return (typeof o===type);
}else{
    // console.log(typeof o);
    console.log(Object.prototype.toString.call(o).toLowerCase().indexOf(type)>0);
    //tostring在prototype中，所以要用prototype
    //因为，没有提前定义对象来使用tosting，所以用object原型的方式使用
    // console.log(Object.prototype.toString.call(o).toLowerCase());
    //将输出改为小写
}
}
let a=()=>{};
a="hello";
a=true;
a=null;
// a=[1,2,3];
console.log("@@"+a);//null的类型居然是null
console.log(isTypeof(a,"null"));