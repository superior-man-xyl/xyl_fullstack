// 思路：除二取结果的余数，存在数组里，因为二进制是用的逆序排列，
//后得到的数放最前面，所以可以用个逆反的方法，
// 而该题只需要得到1的数量，所以不用那么麻烦。
var countBits = function (n) {
    var i = 0;
    while (n > 0) {
        if (n % 2 == 0) {
            n = n / 2;
            if (n % 2 == 1) {
                i++;
                n = n - 1;
            }
        } else {
            n = n - 1;
            i++;
        }

    }
    return i;
};
console.log(countBits(3));