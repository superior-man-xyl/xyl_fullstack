皮特喜欢烤一些蛋糕。他有一些食谱和配料。不幸的是他数学不好。考虑到他的食谱，您能帮助他找出多少个蛋糕可以烘烤？

编写一个函数cakes()，该函数接受配方（对象）和可用成分（也是对象），并返回Pete可以烘烤的最大蛋糕数（整数）。为简单起见，没有数量单位（例如1磅面粉或200克糖只是1或200）。对象中不存在的成分可以视为0。

例子：
/ must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 