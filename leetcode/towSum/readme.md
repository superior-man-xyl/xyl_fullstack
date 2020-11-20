# twoSum leeetcode 腾讯必考题
- node 是让js运行在服务器端的环境，
开发速度更快，但没有Java那么稳定
运行环境在server，Linux服务器 pwd：查看当前文件位置
node 1.js//运行方式


刷题方式
- 读题
整数数组 nums,target 参数
返回数组下标
const nums=[2,7,11,15];

- 前期leetcode先暴力再调优 
1.时间复杂度
    O(n2)
2.空间复杂度

- 提供一个算法
    o(n2)->o(n)
    找到一种适合的数据结构
    数据结构
    Array也是最基本的数据结构 是一个数据集合 数字索引，空间是连续的
    JSON Object对象字面量 也是一个数据 集合 在c里没有原生的，hashMap
    边上例子就是：o(n2)->o(n)+加空间花销