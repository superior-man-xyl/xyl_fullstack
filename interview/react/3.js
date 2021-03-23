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
//为什么会是true   看看immutable

const obj={
    count:0
}

const immutableState=fromJS(obj);
console.log(immutableState.get('count'));
const jsObj=immutableState.toJS();
jsObj.count=2;

console.log(obj);