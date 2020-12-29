//es6手册中
class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    toString(){
        return '('+this.x+','+this.y+')';
    }
}
//JS里根本没有类，class只是语法糖（语法的映射，原做法的映射）
console.log(typeof Point);//放回 function typeof可以区分 function 和 狭义object