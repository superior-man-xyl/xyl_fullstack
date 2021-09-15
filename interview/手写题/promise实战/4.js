Promise.resolve(1).then((res) => {
    console.log(res) 
    return 2
}).catch((err) => {
    return 3
}).then((res) => {
    console.log(res)
})

// 1 2

//promise 每次调用 .then 或者 .catch 都会返回一个新的 promise，从而实现了链式调用。