const twoSum=(nums,target)=>{
    const map=new Map();
    const len=nums.length;
    //这里简化到了只用一个for循环，map里不一次就存入所有数据
    for(let i=0;i<len;i++){
        if(map.has(target-nums[i])){//第一次循环map是为空的，还没存数据
            return [map.get(target-nums[i]),i];
        }else{
            map.set(nums[i],i);//map值值对中以索引为值
        }
    }
    return [];
}