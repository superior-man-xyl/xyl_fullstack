// fork API 
// www.domain.com/path -> application n 个 
// client http协议 -》 解析出ip地址 -》 http应用层的默认80端口 =》 找到spider application 
// 这里是多个进程共享一个端口 
const cluster=require('cluster'); 
const cpuNums=require('os').cpus().length;

cluster.setupMaster({
    exec:'worker.js',
    args:['--use','http']
});

console.log(`一共开启${cpuNums}个子进程来爬取`);
console.log(`爬取数据是乱序的，因此爬取的数据加movieIndex`);

let pageNum=10;//准备爬取10页

const startTime=Date.now();
for(let i=0;i<cpuNums;i++){
    let Work=cluster.fork();
    //通信
    Work.send([i,cpuNums,pageNum])
    Work.on('message',(msg)=>{
        console.log(msg,'-----');
        pageNum--;//判断是否爬完
        if(pageNum==0){
            console.log(`\n已完成所有爬取,using${Date.now()-startTime}ms\n`);
            console.log('关闭子进程');
            cluster.disconnect();
        }
    })
}

cluster.on('fork',(worker)=>{
    console.log(`[master]:fork worker ${worker.id}\n`);
});
cluster.on('exit',(worker)=>{
    console.log(`[master]:子进程${worker.id}被关闭`);
})