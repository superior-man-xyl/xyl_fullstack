function spinWords(str){
    var Astr=[];
    Astr=str.split(' ');
    for(let i=0;i<Astr.length;i++){
        if(Astr[i].length>=5){
            let a=[];
            a=Astr[i].split('');
            a=a.reverse();
            a=a.join('');
            Astr[i]=a;
        }
    }
    str=Astr.join(' ');
    return str;
  }
  console.log(spinWords("Hey fellow warriors"));