const getJson=()=>{//异步
    return "JSON"
}

//函数前面加async只是声明这个函数内部存在异步
async function testAsync(){
    // 异步函数前面加 await，逻辑就会等到这个异步函数执行完毕后，再往下执行
    // await getJson();
    //await执行完后，这后面才能执行
    // console.log();

    //相比await，promise也不是全不如他，其里面自带了catch机制，而await却要像下面这样
    try{
        await getJson();
    }catch(error){
        console.log(error);
    }
}

testAsync()
.then(()=>{
    getJson()
})
.then(()=>{
    //....
})

//promise.then() 是微任务，saync await也是微任务