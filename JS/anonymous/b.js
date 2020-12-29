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

let jsBook=new Book("111","aaa","bbb");
// const attrs=[Object.getOwnPropertyNames(jsBook)];
// console.log(attrs);//[ [ 'isbn', 'title', 'author' ] ]
const attrs=[...Object.getOwnPropertyNames(jsBook),...Object.getOwnPropertyNames(Book.prototype)];
//（...）es语法展开语法(Spread syntax), 可以在函数调用/数组构造时, 将数组表达式或者string在语法层面展开；
// 还可以在构造字面量对象时, 将对象表达式按key-value的方式展开。(译者注: 字面量一般指 [1, 2, 3] 或者 {name: "mdn"} 这种简洁的构造方式)
console.log(attrs);