function topThreeWords(text) {
    var arr=(text.replace(/[,.:?;/]/g,'')).split(" ");
    console.log(arr);
    let map=new Map();
    for(let char of arr){
        if(map.has(char)){
          map.set(char,map.get(char)+1);
        }
        else{
          map.set(char,1);
        }
      }
      map.delete('');//删除null数组值
      console.log(map);
      var arr1=[];
      console.log([...map].length);
      var min=[];
      min = [...map.values()].sort(function (a, b) {
        return b-a;
      });
       console.log(min);
       min=min.slice(0,3);
      if([...map.values()].length>3){
        for (let [key, value] of map) {
            if(value=min[0]){
                arr1[0]=key;
            }else if(value=min[1]){
                arr1[1]=key;
            }else if(value=min[2]){
                arr[2]=key;
            }
          }
        return arr1
      }else if([...map.values()].length==3){
        for (let [key, value] of map) {
            if(value=min[0]){
                arr1[0]=key;
            }else if(value=min[1]){
                arr1[1]=key;
            }
        }
        return arr1;
      }else{
          if(!map.values()){
               for (let [key, value] of map) {
            if(value=min[0]){
                arr1[0]=key;
            }
        }
        return arr1;
          }
       
          return [];
      }
      
}
console.log(topThreeWords("  //wont won't won't "));