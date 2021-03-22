function unique(arr) {
    let map = new Map();
    let array = new Array();  // 数组用于返回结果
    for (let i = 0; i < arr.length; i++) {
      if(map.has(arr[i])) {  // 如果有该key值
        map.set(arr[i], true); 
      } else { 
        map.set(arr[i], false);   // 如果没有该key值
        array.push(arr[i]);
      }
    } 
    return array ;
}

  console.log(unique([1,2,3,4,4,5,5,5,6,7]));