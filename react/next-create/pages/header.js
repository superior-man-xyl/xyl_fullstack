import Head from 'next/head';
import {Button} from 'antd';


function header(){
    return (
        <>
        <Head>
            <title>谢永良的个人网站</title>
            <meta charSet="utf-8" />
        </Head>
        <h1>谢永良的个人网站</h1>
        <div><Button>我是antd按钮</Button></div>
        </>
    )
}

export default header;