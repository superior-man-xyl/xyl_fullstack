//引用类型
//基本数据类型存储的是值，地点是栈，引用数据类型存储的是地址(指针)，地点是堆
const a=[];
 const b=a;//地址复制了份
 b.push(1);
 console.log(a);

 function test(person){
    person.age=26;
    person={//person在这里被重置了，不再是p1了，重新分配了地址
        name:'yyy',
        age:30
    }
    return person
 }
 
 const p1={
     name:'yck',
     age:25
 }
 const p2=test(p1);
 console.log(p1);//{ name: 'yck', age: 26 }
 console.log(p2);//{ name: 'yyy', age: 30 }