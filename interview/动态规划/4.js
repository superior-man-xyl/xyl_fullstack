var coinChange = function(coins, amount) {
    //首先找规律公式
    const f=[];//用于保存每种金额的最小所需硬币数
    f[0]=0;
    for(let i=1;i<=amount;i++){
        f[i]=Infinity;//初始化为无穷大
        //要得到他的上一次的金额加一后的比较
        //遍历每个可用硬币的面额
        for(let j=0;j<coins.length;j++){
            if(i-coins[j]>=0){//说明可以用来凑
                f[i]=Math.min(f[i],f[i-coins[j]]+1)
            }//自下而上
        }
    }
    if(f[amount]===Infinity){
        return -1;
    }
    return f[amount];
};
console.log(coinChange([1,2,5],11));