function bar() {
    var myName = '嘉新'
    let test1 = 100
    {
        let test=123
    }
    if (1) {
        let myName = 'chrome浏览器'
        console.log(test);
    }
}

function foo() {
    var myName = '王嘉新'
    let test = 2 
    {
        let test = 3
        bar()
    }
}

var myName = '队长'
let myAge = 10
let test = 1
foo()