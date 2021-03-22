//获得第X多的标签

window.onload=function(){
    // 最大数的思路是JS 必考的 使用reduce
    const maxByx=function(list,tag,x){
        list=list.sort((a,b)=>{
            return tag(b)-tag(a);//数量从大到小排序
        })
        return list[x];
    }
    function getFrequentTag(){
        //得到reduce 需要的数组
        const tags=[...document.querySelectorAll('*')].map(x=>x.tagName).reduce((acc,tag)=>{
            acc[tag]=acc[tag]?acc[tag]+1:1;//数组存在该元素，就值+1，否则创建元素，设置值为1
            return acc;//得到以tag名为属性名，数量为属性值的对象
        },{})//初始值为对象
        return maxByx(Object.entries(tags),tag=>tag[1],1)//第三个参数用于指定要第几大的
        //tag=>tag[1]这个函数表示return数组的第二个值，也就是标签的数量
    }
    console.log(getFrequentTag());
}