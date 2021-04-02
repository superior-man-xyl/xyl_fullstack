const goods=[
    {
        name:'iphone',
        price:5000,
        inventory:5,
        id:1
    },
    {
        name:'华为N123',
        price:10000,
        inventory:3,
        id:2
    },
    {
        name:'apple',
        price:4999,
        inventory:7,
        id:3
    },
    {
        name:'xiaomi',
        price:5999,
        inventory:15,
        id:4
    }
]

export default{
    //cb:callback  
    //cb是从哪来的  api是交给action用的
    //action 里的同步修改状态的action，形象的比喻action里有两个action，一个请求api，一个同步修改状态
    getProducts:(cb)=>setTimeout(cb(goods),1000)//这里cb回调函数作为形参，到后面api被引用到action或其他模块使用
}