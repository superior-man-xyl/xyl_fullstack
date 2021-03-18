import React from 'react';
import { Layout } from 'antd';
import '../assets/style/layout.css'
const { Content } =Layout;

export default function Frame(props){
    return (
        <div>
            <Layout className="layout">
                <Layout>
                    <Content className="content">
                        {props.children}
                        {/* 表示本组件，在父组件中应用时，<Frame>children</Frame>,children就是中间家的组件，
                        children要通过{props.children}这种方式使其能够在组件中渲染 */}
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}