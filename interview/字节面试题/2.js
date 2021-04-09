//  输出什么 async/await 原理是什么 将这段代码翻译成promise

function getJson() {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        console.log(2);
        resolve(2)
      }, 2000)
    })
  }
  
  async function testAsync() {
    await getJson()//await 会让后面的代码都去到下一次事件循环，自己先运行
    console.log(3);
  }
  
  testAsync()

//=翻译成promise
function testAsync(){
      return Promise.resolve().then(()=>{
          return getJson();
      }).then(()=>{
        console.log(3);
      })
  }
  