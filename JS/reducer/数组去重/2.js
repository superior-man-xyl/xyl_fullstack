function unique(arr) {
    // if (!Array.isArray(arr)) {
    //     console.log('type error!')
    //     return
    // }
    var array = [];//用新数组来装
    for (let i = 0; i < arr.length; i++) {
        if (array.indexOf(arr[i]) === -1) {
            //indexof返回-1表示在新数组中不存在该元素,includes也可以
            array.push(arr[i])//是新数组里没有的元素就push入
        }
    }
    return array;
}

console.log(unique([1,2,3,4,4,5,5,5,6,7]));