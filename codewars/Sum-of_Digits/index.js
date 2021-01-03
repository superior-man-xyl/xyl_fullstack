function digital_root(n) {
    var j;
    while(n>=10){
        n=n.toString();
        n=n.split("");
        j=0;
        for(var i=0;i<n.length;i++){
             j=j+parseInt(n[i]);
        }
        n=j;
    } 
    // n=n.toString();
    // console.log(typeof n)
    // n=n.split("");
    // j=0;
    //     for(var i=0;i<n.length;i++){
    //         j=j+parseInt(n[i]);}
    //         n=j;
    // console.log(typeof n)
   return n;
  }
  console.log(digital_root(493193));