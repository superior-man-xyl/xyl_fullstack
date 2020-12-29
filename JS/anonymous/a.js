
class Book{
    // constructor就是构造器
    constructor(isbn,title,author){
        this.isbn=isbn;
        this.title=title;
        this.author=author;
    }
    display(){
        return `
        ISBN号:${this.isbn}
        Title:${this.title}
        Author:${this.author}
        `
    }
}

const jsbook=new Book("111","aaa","bbb");
console.log(jsbook);
console.log(jsbook.hasOwnProperty("display"));//false
console.log(jsbook.__prototype__==Book.prototype);//true

// Book.prototype={
//     dsiplay:()=>{},
//     sell:()=>{}
// };
//火车头与车身之间
console.log(jsbook.constructor==Book);//true
console.log(jsbook.constructor==Book.prototype.constructor);//true
console.log(jsbook.constructor==Book==Book.prototype.constructor);

//基于原型的面向对象
// 封装，继承，多态
console.log(jsbook.__proto__==Book.prototype);

console.log(Book.prototype.isPrototypeOf(jsbook));//true

console.log("display" in jsbook);//true,  