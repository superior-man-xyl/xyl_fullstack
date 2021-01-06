// es6提供的新的数据结构
// 1.为数组优化而来
// Set Map 两种数据结构,用于存放特定的数据集合的
const people=new Set();//是个数组[] 
people.add('TOM');
people.add('jack');
people.add('香克斯');
people.add('kaligou');
people.add('joes');
// people.add('joes');//重复的不会重新写入
for(const person of people){
    console.log(person);
}
const students=new Set(['王殿虎','ttom','jack']);//可以一次写入
students.add('香克斯');
console.log(students);
// console.log(people);