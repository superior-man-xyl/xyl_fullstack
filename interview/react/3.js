//避免数据被修改
const { Map,fromJS } =require('immutable');//不可变数据时
// es6  Map
let a=Map({
    select:'users',
    filter:Map({name:'Cam'})//Map来自immutable
});
//引用类似于 a,b
let b=a.set('select','people');
console.log(a==b);//false
console.log(a.get('filter')===b.get('filter'));//true
//为什么会是true   看看immutable  个别改变(需要改变的改变)，其余还是不变，所以filter的对象还是同一个

const obj={
    count:0
}

const immutableState=fromJS(obj);
console.log(immutableState.get('count'));//0
const jsObj=immutableState.toJS();

console.log(obj);//{ count: 0 }  说明深拷贝成功了