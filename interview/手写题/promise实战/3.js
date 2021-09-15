const promise = new Promise((resolve, reject) => {
    resolve('success1') 
    reject('error') 
    resolve('success2')
})
promise.then((res) => {
    console.log('then: ', res)
}).catch((err) => {
    console.log('catch: ', err)
})

// then: success1 

// 状态只能变更一次