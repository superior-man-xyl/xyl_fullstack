//观察者模式，其实就是为了实现松耦合
//发布订阅模式里，发布者和订阅者，不是松耦合，而是完全解耦的
//这是其的差别
//这里使用发布订阅模式，与原生JS手写一个EventEmit(事件发射)
class EventEmitter {
    constructor() {
        //创建一个容器
        this.pond = [];
    }
    //向容器中添加方法
    //要注意添加的方法是否已经存在
    add(fn) {
        let pond = this.pond; //简化后面的书写
        let isExist = false; //开始默认不存在
        //去重环节
        pond.forEach(item => item == fn ? isExist = true : null)
        isExist ? null : pond.push(fn);
        //如果该方法不存在就添加进容器，存在就不添加
    }

    //移除容器中的方法
    remove(fn) {
        let pond = this.pond;
        pond.forEach((item, index) => {
            if (item === fn) {
                pond[index] = null;
            }
        })
    }

    //发出
    emit(...arg) {
        let pond = this.pond;
        for (let i = 0; i < pond.length; i++) {
            let item = pond[i];
            //如果item为空，就把它删掉
            if (item == null) {
                pond.splice(i, 1);
                i--;
                //解决用了splice后的数组塌陷问题，即删除了一个元素后，后面所有元素的索引默认都会减1
                continue;
            }
            item(...arg);
        }
    }
}

//测试一下
let subscribe = new EventEmitter();
let fn1 = function fn1(x, y) {
    console.log(1, x, y);
};
let fn2 = function fn2() {
    console.log(2);
};
let fn3 = function fn3() {
    console.log(3);
    subscribe.remove(fn1);
    subscribe.remove(fn2);
};
let fn4 = function fn4() {
    console.log(4);
};

subscribe.add(fn1);
subscribe.add(fn1);
subscribe.add(fn2);
subscribe.add(fn1);
subscribe.add(fn3);
subscribe.add(fn4);
setInterval(() => {
    subscribe.emit(100, 200);
}, 1000);