let writer = {
    firstName: "婧",
    lastName: "龙",
    num: 10
}
if(!writer.company){
  console.log('xxsxx-xxxsffgs');
}

  //这个函数存在什么问题？
  // function appendCompany() {
  //   //问题是——修改了全局对象   不太纯
  //   writer.company = '字节'//处于函数的内部
  // }//reducer要避免非纯函数

  
  // appendCompany();
  // console.log(writer);
  
//如何修改函数，使其达到目的，却不影响全局对象
function appendCompany(obj) {
 let copyWriter=Object.assign({},obj)//使用assign来拷贝
  copyWriter.company = '字节';//使用拷贝出的对象，来赋值，进行功能
  return copyWriter;
}//

  console.log(appendCompany(writer));//{ firstName: '婧', lastName: '龙', num: 10, company: '字节' }
  console.log(writer);//{ firstName: '婧', lastName: '龙', num: 10 }
  