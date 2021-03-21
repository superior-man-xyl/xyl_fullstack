const climbStairs=function (n){
    if(n==1){
        return 1;
    }
    if(n==2){
        return 2;
    }
    return climbStairs(n-1)+climbStairs(n-2);
}
console.log(climbStairs(99));//算不出,可能会栈溢出，数字一大就不能计算
//上面使用递归的算法
//有个问题，上面的解法性能特别差，低下子树会越来越多，有非常多的重复计算，大一些的数字就会出现问题
//递归需要优化，优化上面的递归到2.js