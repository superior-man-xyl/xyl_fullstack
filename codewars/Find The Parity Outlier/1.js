function findOutlier(integers){
    var j=0;
    for(var i=0;i<3;i++){
        if(integers[i]%2==1||integers[i]%2==-1){
            j++;
        }
    }
    //奇数组合
    if(j>=2){
        for(var i=0;i<integers.length;i++){
            if(integers[i]%2==0){
                return integers[i];
            }
        }
    }else{
        //偶数数组
        for(var i=0;i<integers.length;i++){
            if(integers[i]%2==1||integers[i]%2==-1){
                return integers[i];
            }
        }
    }
  }