import {withRouter} from 'next/router';
import Link from 'next/link';
import axios from 'axios'

const who=function({router}){
    return (
        <div>
            <h2>{router.query.name}汪汪叫的跑了过来！</h2>
            <Link href="/">回到首页，呼唤另一条狗!</Link>
        </div>
    )
}
//使用getInitianProps来对axios来请求数据
who.getInitialProps=async ()=>{
    const promise=new Promise((resolve)=>{
        axios('https://www.fastmock.site/mock/71d1cef66face7aba952237bb62f8f49/todolist').then(
            (res)=>{
                console.log('请求到的数据：',res);
                // resolve(res.shallow)
            }
        )
    })
    return await promise;
}

export default withRouter(who);