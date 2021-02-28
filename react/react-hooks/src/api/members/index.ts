import {MemberEntity} from "../../model";
import {members} from './mockData';
//先利用假数据 只给自足
//做完页面开发后，再换成真数据
//


const fetchMembers=():MemberEntity[]=>{
    //promise 类
    //return Promise.resolve(members);
    return members
}

const fetchMembersAsync=()=>{

}

export const memberAPI={
    fetchMembers,
    fetchMembersAsync
}