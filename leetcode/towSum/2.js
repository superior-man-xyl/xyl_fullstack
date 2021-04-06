/**声明参数
 * @author xyl
 * @date 2020-11-20
 * @param {number[]} nums //大括号内写类型，外面跟名字
 * @param {number} target
 * @return {number[]} 
 */ 
//键头函数定义函数（最新），不用function了
const twoSum=(nums,target)=>{
  //  console.log('两数相加')
  let map={};//JSON object  --HashMap哈希表 空间复杂度的花销o(n)  这里用对象代替Map
  let res=[];
  //编写功能 一个函数完成一个功能
  //es6更简洁
  //forEach是内置函数
  //foreach里接收到一个函数callback
  //这个callback函数由我们定义，数组有几个值函数就会执行几次，每次执行时，浏览器都会将遍历到的元素以实参的形式传递进来，我们要定义形参来读取这些内容。
  //第一个参数：当前遍历到的元素；
// 第二个参数：当前遍历到的索引；这里用了两个参数就是值与索引
// 第三个参数：正在遍历的数组，直接就是数组。
  //for+执行功能
  nums.forEach((e,i)=>map[e]=i);//o(n) 以空间换时间
 console.log(map)//-->{ '2': 0, '7': 1, '11': 2, '15': 3 }
  for(let i=0;i<nums.length;i++){
      let j=map[target-nums[i]];//没有就undifined
      if(j&&j!==i){
        res=[i,j];
        break;
      }
  }
  //forEach时间花销o(n),for为 o(n)，所以共2 o(n)
  //   nums.forEach((e,i)=>{
//     //   console.log(e,i);

//   })
  return res;
}

console.log(twoSum([2,7,11,15],9));