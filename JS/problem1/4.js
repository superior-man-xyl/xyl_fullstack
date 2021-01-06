const dogs=new Map();
const friends=new Map();
friends.set('黄志乾','jack');//（key ， value）
friends.set('何江涛','TOM');

//遍历
for(const person of friends){
    console.log(person);
}
friends.forEach(function(value,key){
    console.log(key);
})
friends.forEach((value,key)=>console.log(value,key));

for(const item of friends){
    console.log(item[0]+'&&'+item[1]);
}

// for(const [key,val] of friends){

// }
const [a,b]=[1,2];
const {}={"a":1,"b":2}//?
//解构
console.log(a,b);