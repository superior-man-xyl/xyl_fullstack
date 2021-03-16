# 数据状态与界面的状态一一对应的。

发现history 这个界面状态之前没经验，有点复杂
界面状态 找到一个数据状态与之对应，
current-》stepNumber + history

const squares =current.squares.slice();//？使用slice()无参数可以返回一个新的数组，这是引用赋值的问题