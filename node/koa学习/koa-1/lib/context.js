//ctx怎么来的
let proto={
    // url:request.url
}

function defineGetter(prop,name){
    proto.__defineGetter__(name,function(){
        return this[prop][name]
    })
}

defineGetter('request','url')//url==request.url
defineGetter('request','path')

module.exports=proto;