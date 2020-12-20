//代码更少的方法，但不快，学学看
function findOutlier(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
  }
  /////
  function findOutlier(integers){
    return integers.slice(0,3).filter(even).length >=2 ? integers.find(odd) : integers.find(even);
  }
  function even(num){
    return (num % 2 == 0);
  }
  function odd(num){
    return !even(num)
  }