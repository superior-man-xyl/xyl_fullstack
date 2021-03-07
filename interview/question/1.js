//具体看后面列的隐式转换

//解法1  我们把a设为数组
//复杂数据类型与基础数据类型比较时会发生隐式转换，但a为数组时，就会调用toString方法
//toString方法又会调用join方法，那么改写join方法，使其变为shift（该方法删除数组的第一个元素并返回）
// let a=[1,2,3];
// a.join=a.shift;
// console.log(a==1&&a==2&&a==3);//使其输出为true

var b=[1,2,3];
console.log(b.join());//1,2,3
console.log(typeof(b.join()));//string
console.log(b.join(''));//123
console.log(b.toString());//1,2,3



//解法2
const c={
    // b:0,
    // valueOf:function(){
    //         return ++this.b;
    // }
    //或者
    value:[3,2,1],
    valueOf:function(){
        return this.value.pop();//这还不是闭包，这只是运行对象后的值的修改
    }
}