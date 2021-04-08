//es5实现flat
//使用递归

function flatten(arr){
    var result=[];
    for(let i=0,len=arr.length;i<len;i++){
        if(Array.isArray(arr[i])){
            result=result.concat(flatten(arr[i]));
        }else{
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(flatten([1,[1],[[2]]]));//输出[ 1, 1, 2 ]
