/**声明参数
 * @author xyl
 * @date 2020-11-28
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * 
 */ 
// function merge(){

// }
//js里变量的类型是由值决定的，弱类型
// m+n<=nums1.length就能放下
const merge=(nums1,m,nums2,n)=>{//箭头函数 es6  将函数赋值给merge
    //把nums2合并到nums1中
    //然后重新排序
    let current2=m-1;//定义一个指针
    for(let i=nums1.length-1;i>=nums1.length-n;i--){
        nums1[i]=nums2[current2--];//nums2 有个可遍历的 current2++ 指的是从零到2一直加加
    }
    // console.log(nums1);
    return nums1.sort((a,b)=>b-a)//使用sort函数来进行由小到大的排序，(a,b)是参数，a-b是个布尔值，a-b小于零就调换位置，用b-a就可以变成由大到小排序
}
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));
