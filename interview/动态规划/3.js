// 自底向上
// 1到n
// 公式和自顶向下是一样的 f(n)=f(n-1)+f(n-2)
const f=[];
f[1]=1;
f[2]=2;
const climbStairs=function(n){
    if(n>2){
        for(let i=3;i<=n;i++){
            f[i]=f[i-1]+f[i-2];
        }
    }
    return f[n];
}

console.log(climbStairs(99));