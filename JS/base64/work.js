this.addEventListener('message',(e)=>{//监听是否来了消息
    console.log(e);
    this.postMessage('your said:'+e.data);
})