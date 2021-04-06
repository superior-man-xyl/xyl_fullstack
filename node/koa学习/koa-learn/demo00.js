async function testAsync(){
    return 'hello';
}
//使用async命名的函数返回的都是promise对象  Promise { 'hello' }
console.log(testAsync());//Promise { 'hello' }

function getSomething(){
    return 'something';
}
//await 必须在async中
async function test(){
    const v1=await getSomething();
    const v2=await testAsync();
    console.log(v1,v2);
}
//表明了await可以处理非异步对象
test();//something hello