const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        return reject(new Error('我报个错吧'))
    },3000)
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        return resolve(p1)
    },1000)
})

p2.then(result=>console.log(result,'+++')).catch(error=>console.log(error,'____'))//Error: 我报个错吧_______