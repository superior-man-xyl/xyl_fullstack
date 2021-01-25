function timedCount(){
    for(var i=0;i<10000000000;i++){
        if(i%10000===0){
            postMessage(i);//没10000次就向主线程通个信
        }
    }
}
timedCount();