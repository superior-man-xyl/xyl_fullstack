# 面试官为什么问这个问题？
1. JS 异步问题 callback -> promise -> generator -> await
2. 这是手写题的代表。  比 new Object.create clone  难度更高

- promise有几种状态
- promise A+规范
    - 三种状态  - pending 未完成  fulfilled 成功完成状态resolve是其中的一个函数  rejected 失败状态
    - 只会从未完成态向完成态或失败态转化
    - promise 状态一旦转化，将不能更改
promise的核心就是状态，其是状态转移的编程
