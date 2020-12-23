用函数计算
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

我们要使用函数编写计算并获得结果
每个数字必须有一个函数，范围从0（“零”）到9（“ 9”）
以下每个数学运算必须有一个函数：加，减，乘，除（divided_by在Ruby和Python中）
每次计算仅由一个操作和两个数字组成
最外层的函数代表左操作数，最内层的函数代表右操作数
除法应为整数除法。例如，应返回2，而不是2.666666...：