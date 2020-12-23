/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    if(s==""){
        return -1;
    } // var str = s.split("");//字符串和数组一样，
    // 不需要转换就能像数组一样使用一些东西，如s[1],s.length
    // console.log(str);
    for (var i=0;i<s.length;i++) {
        // 前后方向一起查找，如果查找到同一个，那么就只有一个
        if(s.lastIndexOf(s[i])==s.indexOf(s[i])){
            return i;
        }
    }
    return -1;
};
console.log(firstUniqChar("ccc"));