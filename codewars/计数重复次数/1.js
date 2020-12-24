function duplicateCount(text){
    // text=text.toLowerCase();
    // console.log(text);
    var result=[];
    var i=0;
    var k=0;
    while(text.length>1){
        var reg=new RegExp(text[0],"ig");
        result[i]=text.match(reg);
        if(result[i].length>1){
            k++;
        }
        text=text.replace(reg,"");
        // console.log(reg+"    "+text);
        i++;
    }
    return k;
  }
  console.log(duplicateCount("Indivisibilities"));