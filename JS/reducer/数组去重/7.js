function unique(arr){
    let result=arr.reduce((acc,cur)=>{
        if(!acc.includes(cur)){
            acc.push(cur);
        }
        return acc;
    },[])//[]作为回调函数的第一个参数的初始值
    return result
}

console.log(unique([1,2,3,4,4,5,5,5,6,7]));