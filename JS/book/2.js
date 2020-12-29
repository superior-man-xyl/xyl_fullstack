class bar{
    doStuff(){
        console.log('stuff');
    }
}
const b=new bar();
b.doStuff();
console.log(b.constructor==bar.prototype.constructor);