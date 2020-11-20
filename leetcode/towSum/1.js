// console.log('leetcode,必考之twnodeo Sum');
//手写代码能力要有，写注释
/**
 * @author xyl
 * @date 2020-11-20
 * @param {number[]} nums //大括号内写类型，外面跟名字
 * @param {number} target
 * @return {number[]} 
 */ 
//es5 使用var
const twoSum=function(nums,target){
    //1. 暴力一下，使用两重for循环
    let arr=[];
    //es6
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if (nums[i] + nums[j] === target){
            arr=[i,j]
            }
        }
    }
    return arr
}
console.log(twoSum([2,7,11,15],9))

