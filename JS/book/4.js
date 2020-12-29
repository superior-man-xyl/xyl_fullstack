console.log(Object.assign({},{
    a:1,
    b:2,
    say(){
        console.log(this.a+this.b)
    }
}));
//{ a: 1, b: 2, say: [Function: say] }