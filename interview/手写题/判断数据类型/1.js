function typeOf(obj){
    console.log(Object.prototype.toString.call(obj),'+++');
    let res=Object.prototype.toString.call(obj).split(' ')[1];
    console.log(res,'---');
    res=res.substring(0,res.length-1).toLowerCase();
    return res;
}
console.log(typeOf('123'));