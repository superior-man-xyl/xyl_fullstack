// 题目：使用promise实现每隔一秒输出一个1，一共三个
var p1 = new Promise(function (res, rej) {
    setTimeout(function () {
        console.log(1)
        res()
    }, 1000)
})
var p2 = function () {
    return new Promise(function (res, rej) {
        setTimeout(function () {
            console.log(1)
            res()
        }, 1000)
    })
}
p1.then(p2).then(function () {
    setTimeout(function () {
        console.log(1)
    }, 1000)
})