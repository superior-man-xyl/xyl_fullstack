function cakes(recipe, available) {//（食谱，可用）
  var o=Object.keys(recipe);
  var p=Object.keys(available);
  // console.log(o instanceof Array);
  var j=0;
  var a=[];
  for(let i=0;i<o.length;i++){
    for(let k=0;k<p.length;k++){
      if(o[i]==p[k]){
       a[j]=o[i];
        j++;
      }
    }
  }
// console.log(j);
// console.log(a);
// console.log(recipe[a[0]]);
  if(j<o.length){
    // console.log(11111)
    return 0;
   }else{
     let m=[];
    for(let i=0;i<a.length;i++){
      m[i]=(available[a[i]]/recipe[a[i]]);
    }
    if(Math.min(...m)<1){
      // console.log(22222);
      return 0;
    }else{
      return Math.floor(Math.min(...m));
    }
   }
  }
  console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); 