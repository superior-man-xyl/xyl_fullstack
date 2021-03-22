function unique(arr) {
    arr = arr.sort((a, b) => a - b)//sort先按从小到大排序
    var arrry= [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            arrry.push(arr[i]);
        }
    }
    return arrry;
}
console.log(unique([1,2,3,4,4,5,5,5,6,7]));