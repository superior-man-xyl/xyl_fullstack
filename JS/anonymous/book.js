// constructor构造函数
let Book=function(isbn,name,author){
    this.isbn=isbn;
    this.author=author;
    this.name=name;
}
//构造函数与普通函数的区别？
let halibote=new Book("0-395-07122-4","The Habbit","J.R.R.Tolkien");
console.log(halibote);