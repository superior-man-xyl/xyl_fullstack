let books={
    author:"Tom",
    forAuthor:{
        name:'Tom',
        age:'18',
        sex:'man'
    }
}

//方式一  使用Object.assign()
let a=Object.assign({},books);
//方法二
let b={...books};
//方法三
let c=[1,2].slice();

console.log(a,b,c);
