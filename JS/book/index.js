function Book(isbn,title,author){
    // this.title=isbn;
    // this.isbn=isbn;
    // this.author=author;
    this.setIsbn(isbn)
}
// 怎么设置这些setIsbn函数呢？
Book.prototype={
    setIsbn(isbn){
        //这里该写什么代码
        //isbn要只可读
        // private 私有属性，对方的方法内this.调用，但是在外界不能访问
        // js里不存在private，但是有个约定，以 _ 开头的就是私有属性
        // check:检查的意思 这里要检查isbn的格式，
        if(!this.checkIsbn(isbn))
        throw new Error('ISBN格式有误');

        this._isbn=isbn;
    },
    //私有属性的读取方法 getIsbn()
    getIsbn(){
        return this._isbn;
    },
    checkIsbn(isbn){
        if(!isbn) return false;//非空返回
        return(/^\d{3}-\d-\d{3}-\d{5}-\d$/.test(isbn));
    }
}
// 将display函数写到原型链中
Book.prototype.display=function(){

}
// //class 只是语法糖
const jsDontKnow=new Book('978-7-121-29899-8','React全栈','Jack');
// console.log(jsDontKnow.isbn);//这时isbn是公有属性
console.log(jsDontKnow.getIsbn());//读取私有属性
// 这里有个问题！！！使用this...创造的属性是public，后面可变//js中没有提供public和private，但是提供了实现方法
jsDontKnow.isbn='dddd';
console.log(jsDontKnow.isbn);
// 怎么做private？看前面行5

// console.log(jsDontKnow.__proto__==Book.prototype);
console.log(jsDontKnow instanceof Book);
console.log(Book.prototype.isPrototypeOf(jsDontKnow));//