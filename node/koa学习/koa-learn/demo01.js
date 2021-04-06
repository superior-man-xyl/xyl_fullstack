function takeLongTime(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            return resolve("long_time_value")
        },1000);
    })
}
async function test(){
    const v=await takeLongTime();
    console.log(v);
}
test();//一秒后输出long_time_value