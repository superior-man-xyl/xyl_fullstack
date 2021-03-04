//bigint
//高精度的时间戳，MySQL的id值等等，其是适应大数据而生的
const theBiggestInt=90071999999991n;
console.log(typeof theBiggestInt);//bigint
const alsoHuge=BigInt(90071999999991);

const b1=BigInt(Number.MAX_SAFE_INTEGER);
console.log(b1);//9007199254740991n
console.log(BigInt(Number.MIN_SAFE_INTEGER));//-9007199254740991n
//运算方式：数值后面要带个n
const maxPlusOne=b1+1n;
console.log(maxPlusOne);//9007199254740992n