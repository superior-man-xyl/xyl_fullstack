function shallowCopy(obj){
    if(typeof obj!=='object'){//看看传入值是不是Object
        return;
    }
    let newObj=obj instanceof Array?[]:{};//判断是要的新数组还是新Object
    for(let key in obj){
        //for in 循环遍历对象的属性时，原型链上的所有属性都将被访问,所以要判断是不是自己的
        if(obj.hasOwnProperty(key)){
            newObj[key]=obj[key];
        }
    }
    return newObj;
}