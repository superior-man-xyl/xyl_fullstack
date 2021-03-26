import {PostModel} from './post.model'
import {connection} from '../app/database/mysql'
/**
 * 新增文章,要严格校验传来的数据，使用ts，比如title要有
*/
export const createPost=async(post:PostModel)=>{
    const statement=`
    INSERT INTO post
    SET ?
    `;
    //用户每次访问都走数据库吗？ 不应该，应该先走缓存
    //做一次保存操作
    //如果是list select 就用redis    mysql加redis，redis做储存
    const [data]=await connection.promise().query(statement,post)//mysql2提供的api
    //拿到data数据后
    return data
}