//api是前后端交流的接口
//application interface
// graphql
//frontend react component cd <-> fetch <-> api  <-> backed koa+mongodb

//api/member  member相关的请求都放在这个目录下，细分了模块 CRUD
import { MemberEntity } from '../../model';
//假数据-》fetch   ts interface-》model-》interface
export const members: MemberEntity[]=[
    {
        id: 1457912,
        login: "brauliodiez",
        avatar_url: "https://avatars.githubusercontent.com/u/1457912?v=3"
      },
      {
        id: 4374977,
        login: "Nasdan",
        avatar_url: "https://avatars.githubusercontent.com/u/4374977?v=3"
      }
  
]