//思路：头一个顺序排序，为一个倒序，加起来，删除头一个尾一个，对每个数组都是这样
//array是个二重数组
//有bug
snail = function(array) {
    let a=[];
    let b=[];
    let c=[];
    let d=[];
    let arr=[];
    while(true){
        if(array[0].length>1){
            a=array.shift();
        b=array.pop();
        // console.log(b instanceof Array);
        b.reverse();
        // console.log('#####',array,'#####')
        if(array[0].length>1){
            // let j=0;
        for(let i=0;i<array.length;i++){
            c[i]=array[i].pop();
            d[i]=array[i].shift();
            // j++;
        }
        console.log('###',array)
         d.reverse();
        }else{
            c=[];
            d=[];
        }

        // console.log(a,c,b,d)
        arr=arr.concat(a,c,b,d);
        // console.log(arr)
        }else{
            array[0].reverse()
            arr=arr.concat(array[0]);
            // console.log(arr);
            break;
        }
    }
    // console.log(arr.length);
    return arr;
  }
//   snail([[1,2,3],[8,9,4],[7,6,5]]);, [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]
  console.log(snail([[1, 2, 3, 4, 5],
                     [6, 7, 8, 9, 10],
                     [11, 12, 13, 14, 15],
                     [16, 17, 18, 19, 20],
                      [21, 22, 23, 24, 25]]));