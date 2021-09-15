// 红灯3秒亮一次，绿灯1秒亮一次，黄灯2秒亮一次；
// 如何让三个灯不断交替重复亮灯？（
// 用Promise实现）三个亮灯函数已经存在：

// 换句话说，就是红灯亮起时，承诺2s秒后亮绿灯，绿灯亮起时承诺1s后亮黄灯，黄灯亮起时，承诺3s后亮红灯……这显然是一个Promise链式调用，看到这里你心里或许就有思路了，我们需要将我们的每一个亮灯动作写在then()方法中，同时返回一个新的Promise，并将其状态由pending设置为fulfilled，允许下一盏灯亮起。
function red() {
    console.log('red');
}

function green() {
    console.log('green');
}

function yellow() {
    console.log('yellow');
}

let myLight = (timer, cb) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            cb();
            resolve();
        }, timer);
    });
};

let myStep = () => {
    Promise.resolve().then(() => {
        return myLight(3000, red);
    }).then(() => {
        return myLight(2000, green);
    }).then(() => {
        return myLight(1000, yellow);
    }).then(() => {
        myStep();
    })
};
myStep();
// output:// => red// => green// => yellow// => red// => green// => yellow// => red