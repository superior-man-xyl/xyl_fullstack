function duplicateCount(text){
    var str=text.toLowerCase().split('').sort().join('');//排序后相同的能在一起，去重的话这样就很快

    //得到所有的数字，使用match()加正则
    // var word='123-4560-666';
    // console.log(/\d+/.test(word));//ture   \d所有的数字 +:多个，这样前123就会为数组中的一个值
    // console.log(word.match(/\d+/g))// [ '123', '4560', '666' ]
    
    //现在相同的字符是相邻的，怎么处理？
    var arr=str.match(/([a-zA-Z])\1+/g);//  \1是什么   /([.])\1+/g  表示任何重复的字符
    // \n:n为数字，为之前匹配到的第几个小组，用于分组
    // var arr=str.match(/(-)\1+/g);
    console.log(arr);
    if(arr==null){
        return 0;
    }
    return arr.length;
}
console.log(duplicateCount("Indivisibilities"));