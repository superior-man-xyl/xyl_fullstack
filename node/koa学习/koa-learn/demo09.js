const Koa=require('koa');
const views=require('koa-views');

const path=require('path')
const app=new Koa();

app.use(views(path.join(__dirname,'./view'),{
    extension:'ejs'
}))

app.use(async(ctx)=>{
    let title='Hello xyl';
    await ctx.render('index',{
        title
    })//传递一个值
});

app.listen(3000,()=>{
    console.log("服务器已在3000端口启动");
})