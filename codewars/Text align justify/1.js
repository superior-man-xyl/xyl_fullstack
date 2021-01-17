/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
var justify = function (str, len) {
    let arr = [];
    console.log(len);
    let result = '';
    let k = 0;
    arr = str.split('-');
    let s = 0;
    if (str.length <= len) {
        result = str.replace(/-/g, ' ');
    } else if (str.length > len) {
        for (let i = 0; i < arr.length; i++) {
            s = s + arr[i].length;
            if(i==arr.length-1){
                // console.log('sss33');
                for (let j = k; j <i; j++) {
                    result = result.concat(arr[j], ' ');
                }
                result = result.concat(arr[i]);
                break;
            }
            if ((s + (i - k)) == len) {
                // console.log('sss11');
                for (let j = k; j < i; j++) {
                    result = result.concat(arr[j], ' ');
                }
                result = result.concat(arr[i], '\n');
                k = i + 1;  
                s = 0;

            } else if ((s + (i - k)) > len) {
                // console.log('sss22');
                let num = len - (s- arr[i].length);
                while (num > 0) {
                    for (let j = k; j < i-1; j++) {
                        arr[j] = arr[j].concat(' ');
                        num--;
                    }
                }
                for (let j = k; j < i; j++) {
                    result = result.concat(arr[j]);
                }
               
                result = result.concat("\n");
                k = i;
                s = 0;
            }

        }
      
    }
    // console.log(result);
    return result;
};
console.log(justify("Lorem-ipsum-dolor-sit-amet-aaaaaaaaaaa-a", 30));