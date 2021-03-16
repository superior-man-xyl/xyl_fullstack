# 设计组件学习一

不该只切页面，要能写组件，设计组件
把组件发布到npm里就非常好？ 省市选择什么的

- 通过一个原生的JS,实现下棋盘   nic_way
- 分析出react的组件设计的点
    1. 有一些状态
    全局状态 hasWinner ->Game
    chess:1  mvvm的方式
    原生中就是  pattern 二维数组实现
    数据修改，操作DOM 重新执行build函数运行才能更新

    接下来使用MVVM的方式来做，数据状态的改变和界面的重绘 结合起来
    原生：onclick->数据+build
    react：react->响应式

    2. react做  
    悔棋 下棋的每一步的历史记录
    怎么设计数据状态？  currentData 当前数据   totalData 总数据
    设计组件 Game Board(对于currentdata)

    组件（三个）1.Game父组件 2.board棋盘 3.Square 右边的下棋历史(悔棋) 
    history 数组， 每一项都是二维数组 都有当前的下棋数据
    stepNumber： 0++ i
    current history[stepNumber]
    onclick 之后就会通过 slice 把悔棋到的那一步的后面部分舍弃  
