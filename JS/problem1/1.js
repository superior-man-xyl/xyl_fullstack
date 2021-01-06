let ran_num=Math.random();//产生一个随机数 0.5704598814666213
console.log(ran_num);
console.log(Math.floor(2.3))//向下取整  2
console.log(Math.ceil(7.3))//向上取整  8
console.log(Math.round(25.1))//25  四舍五入
console.log(Math.round(25.5))//26

//输出一个0到9的随机数
console.log(Math.floor(Math.random()*10));
let max =100,
min=0;
//生成一个最大值和最小值之间的随机整数
console.log(Math.floor(Math.random()*(max-min))+min)