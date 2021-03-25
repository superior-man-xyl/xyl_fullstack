import {PostModel} from './post.model'
/**
 * 新增文章,要严格校验传来的数据，使用ts，比如title要有
*/
export const createPost=(post:PostModel)=>{
    const statement=`
    INSERT INTO post
    SET ?
    `;
}