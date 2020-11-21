/**
 * 获得唯一id
 * @author xyl
 * @date 2020-11-21
 * @return {string}
 */
// const uniqueID=()=>{
//     // 时间戳
//     let t=+new Date();//日期前面加一个+，就是类型转换
//     let ranNum=Math.ceil(Math.random()*10000);//将随机生成的0-1之间的小数，乘一万，再取整，得四位
//     return t+""+ranNum;
// }
//优化后只需要下面一行代码
const uniqueID=()=>+new Date()+""+Math.ceil(Math.random()*10000);
console.log(uniqueID());//输出时间戳和随机四位数合成的唯一id