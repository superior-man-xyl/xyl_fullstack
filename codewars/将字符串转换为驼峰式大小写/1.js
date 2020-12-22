function toCamelCase(str){
    str=str.split("");
    var j=0;
    for(var i=0;i<str.length;i++){
        if(str[i]=="_"||str[i]=="-"){
            j=i+1;
            str[j]=str[j].toUpperCase();
        }
    }
    str=str.join("");
    str=str.replace(/[_-]/g,"");
    return str;
}
console.log(toCamelCase("abc_drf-ghj"));