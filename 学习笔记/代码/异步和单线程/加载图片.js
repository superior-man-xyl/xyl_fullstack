const src = '';

function imgLoad(src) {
    return new Promise((resolve, reject) => {
        let img = document.createElement('img');
        img.onload = () => {
            resolve(img);
        };
        img.onerror = () => {
            const err = new Error(`image loadFail ${src}`);
            reject(err)
        }
        img.src = src;
    })
}

const url=''
//加载一张图片
imgLoad(url).then((img) => {
    console.log(img.width);
    return img; //向下传递必须有
}).then((img) => {
    console.log(img.height);
}).catch((err) => {
    console.error(err)
})

//先加载一张图片，再加载另一张图片
const url1='';
const url2='';
imgLoad(url1).then((img)=>{
    console.log(img.width);
    return img;//传递一个对象
}).then((img)=>{
    console.log(img.height);
    return imgLoad(url2);//传递一个promise
}).then((img)=>{
    console.log(img.width);
}).then((img) => {
    console.log(img.height);
}).catch((err) => {
    console.error(err)
})
