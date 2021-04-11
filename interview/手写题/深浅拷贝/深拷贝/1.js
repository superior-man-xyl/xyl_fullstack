//简易版
function deepClone(obj){
    if(typeof obj!=='object'||obj===null){
        return obj;
    }
    let newObj=obj instanceof Array?[]:{};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key]=typeof obj[key]!=='object'?deepClone(obj[key]):obj[key];
        }
    }
    return newObj;
}
a=[1,2,3,4,null,undefined]
b=deepClone(a);
b.push(6);

console.log(a,b);