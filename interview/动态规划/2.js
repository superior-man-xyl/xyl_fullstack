//递归需要优化，什么是尾递归？
// 解决重复计算，特别是底部的大量重复计算
//算过的记录下来，使用空间换时间

//自顶向下
const f=[];
const climbStairs=function(n){
    if(n==1){
        //退出条件
        return 1;
    }
    if(n==2){
        return 2;
    }
    if(f[n]===undefined){
        f[n]=climbStairs(n-1)+climbStairs(n-2);
        return f[n];
    }
    return f[n];
}
console.log(climbStairs(99));