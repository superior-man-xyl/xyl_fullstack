// 函数是天生可以复用的
function cat(name,color){
    // var obj={};
    // obj.name=name;
    // obj.color=color;
    // return obj;
    return {name:name,color:color}
}
var cat1=cat("大毛","黄色");
console.log(cat1)
