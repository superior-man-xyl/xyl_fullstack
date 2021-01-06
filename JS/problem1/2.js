//老方法
// function duplicateCount(word){
//     //Map JSONObject 没有重复的就放入JSONObject
//     let map={};//使用了数据结构
//     let count=0;
//     for(let i=0;i<word.length;i++){
//         let char=word[i];
//         if(char in map){
//             count++;
//         }else{
//             map[char]=1
//         }
//     }
//     return count;
// }
//   console.log(duplicateCount("aadsdjfwuhh"));

//新方法
function duplicateCount(word){
    //es6里定义的新的数据结构有哪些 Map
  let map=new Map();//es6 提供的数据结构 HashMap
  // key=>value for 0(n) 0(1) redis
  // ElasticSearch
  //时间复杂度
  for(let char of word){
    if(map.has(char)){
      map.set(char,map.has(char)+1);
    }
    else{
      map.set(char,1);
    }
  }
  return map;
}
console.log(duplicateCount("aadsdjfwuhh"));
