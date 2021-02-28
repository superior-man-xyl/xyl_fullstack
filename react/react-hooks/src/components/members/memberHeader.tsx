// members页面的相关组件都放置在members文件夹下，有利于管理，且利用index.ts将组件集中

import * as React from 'react';
 export const MemberHeader:React.FC<{}>=()=>{
     return(
         <tr>
         <th>Avatar</th>
        <th>id</th>
        <th>login</th>
         </tr>
     )
 }