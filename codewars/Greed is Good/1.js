function score( dice ) {
    let a=[0,1,2,3,4,5,6];
    // for(let i=1;i<=6;i++){
    //     a[i]=[];
    // }
    dice=dice.join('');
    // console.log(a);
    // for(let i=1;i<7;i++){
    //     let reg=new RegExp(i,"g");
    //     // console.log(reg);
    //     a[i]=dice.match(reg);
    // }
    var s=0;
    for(let i=1;i<7;i++){
        a[i]=[];
        let reg=new RegExp(i,"g");
        // console.log(reg);
        a[i]=dice.match(reg);
        if(a[i]!=null){
            switch(i){
                case 1:
                    if(a[1].length>=3){
                        s=s+1000+(a[1].length-3)*100;
                    }else{
                        s=s+a[1].length*100;
                    }
                    break;
                // case 2:
                //     if(a[2].length>=3){
                //         s=s+200;
                //     }
                //     break;
                // case 3:
                //     if(a[3].length>=3){
                //         s=s+300;
                //     }
                //     break;
                // case 4:
                //     if(a[4].length>=3){
                //         s=s+400;
                //     }
                //     break;
                case 5:
                    if(a[5].length>=3){
                        s=s+500+(a[5].length-3)*50;
                    }else{
                        s=s+a[5].length*50;
                    }
                    break;
                // case 6:
                //     if(a[6].length>=3){
                //         s=s+600;
                //     }
                //     break;
                default:
                    if(a[i].length>=3){
                        s=s+i*100
                    }
            }
        }
    }
    return s;
}
// score();
console.log(score([5,1,3,4,1]));