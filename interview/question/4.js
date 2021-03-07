//为什么
console.log(0.1+0.2);//0.30000000000000004
//JS浮点数不准确 不是0.3
//JS 没有浮点数类型 只有Number  不适合计算
//JS在转成二进制的时候  会无限的循环 加0加1试图准确表达  最后只留32位，其他舍弃
//二进制相加 不准确
console.log((0.1).toString(2));//toString还能传进制数
//上面输出：0.0001100110011001100110011001100110011001100110011001101

console.log(Number.parseInt('010',8));//8
console.log(Number.parseInt('20',2));//NaN  因为字符串不符合二进制
//pardeInt 的第二个参数 小于2 大于36 也是返回NaN

console.log(999999999999999);//10000000000000000  16位时
console.log(99999999999999);//99999999999999    非16位时
// 为什么呢？
//因为JS Number类型只能安全的表达   正负2的53次方
console.log(Math.pow(2,53));//9007199254740992
//溢出了 超出计算范围 使用Bigint就行
console.log(9007199254740992===9007199254740993);//true
console.log(9007199254740992n===9007199254740993n);//false
// console.log(10+10n);//报错  Bigint不能和Number运算
console.log('10'+10n);//1010  只有和字符串能拼接不报错
console.log(null+10);//10
// console.log(null+10n);//报错