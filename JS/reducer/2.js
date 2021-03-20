const bills=[
    {
        type:'transfer',
        momey:233
    },
    {
        type:'study',
        momey:341
    },
    {
        type:'shop',
        momey:821
    },
    {
        type:'transfer',
        money:821
    },
    {
        type:'study',
        momey:821
    }
]

let result=bills.reduce((acc,cur)=>{
    if(!acc[cur.type]){
        acc[cur.type]=[];
    }
    acc[cur.type].push(cur)
    return acc;
},{})
console.log(result);