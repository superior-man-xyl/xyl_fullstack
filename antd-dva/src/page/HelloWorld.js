import React, { useState } from 'react';
import { Card, Tabs, Tree  } from 'antd';
const { TabPane }  = Tabs;
const { TreeNode } = Tree
export default () => {
    const [activeKey, setActiveKey] = useState("1");
    const [expandedKeys, setExpandedKeys] = useState([]);
    const onExpand = (expandedKeys) => {
        console.log(expandedKeys, '----------')
        setExpandedKeys(expandedKeys)
    }
    const onSelect = (selectedKeys) => {
        // expandedKeys 
        const key = selectedKeys[0];
        console.log(key, '----------')
        if (expandedKeys.includes(key)) {
            setExpandedKeys(expandedKeys.filter(k => k != key))
        } else {
            setExpandedKeys([...expandedKeys, key])
        }
    }
    const style = {
        width: '400px',
        margin: '30px',
        boxShadow: '0 4px 8px 0 rgba(0,0,0, 0.2)',
        border: '1px solid #e8e8e8'
    }
    return (
        <>
            <Card style={style} actions={[<a>操作一</a>, <a>操作二</a>]}>
                <Card.Meta 
                    avatar={<img
                        style={{width: '64px', height: '64px', 
                    borderRaduis: '32px'}}
                        src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
                    />}
                    title="Alipay"
                    description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
                />
            </Card>
            {/* { 受控组件 组件控制起来} */}
            <Tabs 
                activeKey={activeKey}
                onChange={setActiveKey}>
                <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            </Tabs>
            <Tree 
                expandedKeys={expandedKeys}
                selectedKeys={[]}
                onExpand={onExpand}
                onSelect={onSelect}>
                <TreeNode title="parent 1" key="0-0" >
                    <TreeNode title="leaf" key="0-0-0"/>
                    <TreeNode title="leaf" key="0-0-1"/>
                </TreeNode>
            </Tree>
        </>
    )
}