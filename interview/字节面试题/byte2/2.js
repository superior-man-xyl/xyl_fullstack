// <!-- 算法题  逻辑 + 简单的算法
// JS 实现36进制 -->
//写好类似leetcode的函数，测试用例，用例结果
//提供36位的表达0-9a-z
function getNums36(){
    var nums36=[];
    for(var i=0;i<36;i++){
        if(i>=0&&i<=9){
            nums36.push(i)
        }else{
            nums36.push(String.fromCharCode(i+87));
        }
    }
    console.log(nums36,'-----+')//得到要用的[0,   1,   2,   3,   4,   5,   6,   7,  8,   9,   'a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z'] ----
    return nums36;
}
function scale36(n){
    const arr = [];
    var nums36=getNums36();
    while(n){
        var res=n%36;
        console.log(res,'----')
        arr.unshift(nums36[res]);//得到相应的数值，大于9就字母代替
        //进位
        n=parseInt(n/36);
        console.log(n,'+++++')
    }
    // 36进制 0-9 a-fgi-z 一直到36位
}
console.log(scale36(36));//输出10