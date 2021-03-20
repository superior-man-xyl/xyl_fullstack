function reducer(arr){
    let result=arr.reduce((acc,cur)=>{
        // []=>unique
        //要求每一次都不重复
        if(!acc.includes(cur)){
            acc.push(cur);
        }
        return acc;
    },[])//[]作为回调函数的第一个参数的初始值
    return result
}
console.log(reducer([1,2,3,4,,4,5,5,5,6,7]));

//如果不给第二个参数呢？
let result2=[1,2,3,4].reduce((acc,cur)=>{
    return acc+cur;
})
console.log(result2);

let result3=[1,2,3,4].reduce((acc,cur,index,o)=>{
    console.log(acc,cur,index,o);
    return acc+cur;
})
console.log(result3);

let result4=[1,2,3,4].reduce((acc,cur,index,o)=>{
    console.log(acc,cur,index,o);
    return acc+cur;
},10)//从第二个算起，以第一个为初始值
console.log(result4);