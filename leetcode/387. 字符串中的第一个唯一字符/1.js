/**
 * @param {string} s
 * @return {number}
 */
// 暴力法，耗时太多，舍弃
var firstUniqChar = function(s) {
    var str=s.split("");
    for(var i=0;i<str.length;i++){
        var k=0;
        for(var j=i+1;j<str.length;i++){
            if(str[i]==str[j]){
                k++;
            }
        }
        if(k==0){
            return i;
        }else if(i==str.length-1){
            return -1;
        }
    }
};
console.log(firstUniqChar("loveleetcode"));