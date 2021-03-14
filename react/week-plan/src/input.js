import React from 'react';
import 'antd/dist/antd.css'//引入antdcss样式，才能使UI组件正常显示
import { Input, Button,Select} from 'antd';
const { Option, OptGroup } = Select;
// import store from './store'

const InputText =(props)=>{
        return ( 
            <div className="input">
                <Button type="primary" disabled>选择执行时间</Button>
                <Select defaultValue="星期一" style={{ width: 200 }} onChange={props.handleChange}>
                <OptGroup label="工作日">
                    <Option value="1">星期一</Option>
                    <Option value="2">星期二</Option>
                    <Option value="3">星期三</Option>
                    <Option value="4">星期四</Option>
                    <Option value="5">星期五</Option>
                </OptGroup>
                    <OptGroup label="休息日">
                    <Option value="6">星期六</Option>
                    <Option value="7">星期日</Option>
                </OptGroup>
            </Select>
                <Input placeholder="计划踢一天球" onChange={props.changeInputValue}/>
                <Button type="primary" onClick={props.handleClick}>添加</Button>
            </div>
         );
}
 
export default InputText;