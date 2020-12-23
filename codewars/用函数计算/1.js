function zero(f) {
    // console.log(f);
    if(f==undefined){
         return 0;
    }else{
        if(f[0]=='+'){
            return 0+f[1];
        }else if(f[0]=='-'){
            return 0-f[1];
        }else if(f[0]=='*'){
            return 0*f[1];
        }else{
            return Math.floor(0/f[1]);
        }
    }
}
function one(f) {
    if(f==undefined){
        return 1;
   }else{
       if(f[0]=='+'){
           return 1+f[1];
       }else if(f[0]=='-'){
           return 1-f[1];
       }else if(f[0]=='*'){
           return 1*f[1];
       }else{
           return Math.floor(1/f[1]);
       }
   }
}
function two(f) {
    if(f==undefined){
        return 2;
   }else{
       if(f[0]=='+'){
           return 2+f[1];
       }else if(f[0]=='-'){
           return 2-f[1];
       }else if(f[0]=='*'){
           return 2*f[1];
       }else{
           return Math.floor(2/f[1]);
       }
   }
}
function three(f){
    if(f==undefined){
        return 3;
   }else{
       if(f[0]=='+'){
           return 3+f[1];
       }else if(f[0]=='-'){
           return 3-f[1];
       }else if(f[0]=='*'){
           return 3*f[1];
       }else{
           return Math.floor(3/f[1]);
       }
   }
}
function four(f) {
    if(f==undefined){
        return 4;
   }else{
       if(f[0]=='+'){
           return 4+f[1];
       }else if(f[0]=='-'){
           return 4-f[1];
       }else if(f[0]=='*'){
           return 4*f[1];
       }else{
           return Math.floor(4/f[1]);
       }
   }
}
function five(f) {
    if(f==undefined){
        return 5;
   }else{
       if(f[0]=='+'){
           return 5+f[1];
       }else if(f[0]=='-'){
           return 5-f[1];
       }else if(f[0]=='*'){
           return 5*f[1];
       }else{
           return Math.floor(5/f[1]);
       }
   }
}
function six(f) {
    if(f==undefined){
        return 6;
   }else{
       if(f[0]=='+'){
           return 6+f[1];
       }else if(f[0]=='-'){
           return 6-f[1];
       }else if(f[0]=='*'){
           return 6*f[1];
       }else{
        //    console.log(f);
           return Math.floor(6/f[1]);
       }
   }
}
function seven(f) {
    if(f==undefined){
        return 7;
   }else{
       if(f[0]=='+'){
           return 7+f[1];
       }else if(f[0]=='-'){
           return 7-f[1];
       }else if(f[0]=='*'){
           return 7*f[1];
       }else{
           return Math.floor(7/f[1]);
       }
   }
}
function eight(f) {
    if(f==undefined){
        return 8;
   }else{
       if(f[0]=='+'){
           return 8+f[1];
       }else if(f[0]=='-'){
           return 8-f[1];
       }else if(f[0]=='*'){
           return 8*f[1];
       }else{
           return Math.floor(8/f[1]);
       }
   }
}
function nine(f) {
    if(f==undefined){
        return 9;
   }else{
       if(f[0]=='+'){
           return 9+f[1];
       }else if(f[0]=='-'){
           return 9-f[1];
       }else if(f[0]=='*'){
           return 9*f[1];
       }else{
           return Math.floor(9/f[1]);
       }
   }
}

function plus(f) {
    var a=['+'];
    a[1]=f;
    return a;
}
function minus(f) {
    var a=['-'];
    a[1]=f;
    return a;
}
function times(f) {
    var a=['*'];
    a[1]=f;
    return a;
}
function dividedBy(f) {
    var a=['/'];
    a[1]=f;
    // console.log(a);
    return a;
}
console.log(six(dividedBy(two())));