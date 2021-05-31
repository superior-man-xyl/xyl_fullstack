class EventBus {
    constructor() {
        //主题
        this.subjects = {};
    }
    hasSubject(subject) {
        return this.subjects[subject] ? true : false;
    }

    /**
     * 订阅的主题
     * @param {String} subject 主题
     * @param {Function} callback 订阅者
     */
    //添加订阅
    on(subject, callback) {
        if (!this.hasSubject(subject)) {
            this.subjects[subject] = [];
        }
        this.subjects[subject].push(callback);
    }
    //取消订阅
    off(subject, callback) {
        if (!this.hasSubject(subject)) {
            return;
        }
        let index = this.subjects[subject].indexOf(callback);
        if (index > -1) {
            subject[subject].splice(index, 1);
        }
    }
    //发布主题
    emit(subject, ...data) {
        if (!this.hasSubject(subject)) {
            return;
        }
        this.subjects[subject].forEach(callback => {
            callback(...data);
        });
    }
}

//测试下
const chancel = new EventBus();
chancel.on('updata', (data) => {
    console.log(`数据是${data}`)
});
chancel.emit('updata', 1234);