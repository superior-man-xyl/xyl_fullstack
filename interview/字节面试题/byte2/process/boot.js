const cluster=require('cluster');//引入多核能力 多进程

if(cluster.isMaster){
    // console.log(require('os').cpus().length);//可以拿到各种数据
    //负责调度
    for(let i=0;i<require('os').cpus().length/2;i++){
        createWorker();//
    }
    function createWorker(){
        var worker=cluster.fork();//子进程
    }
}else{//说明不是主进程
    require('./app');//进程之间共享一个端口
}