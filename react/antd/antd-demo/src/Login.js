import React, { Component } from 'react';
import './Login.css';
import config from './config';
import { Form, Input, Button, Checkbox, Row } from 'antd';

//用antd做网站的后台，以后做的就是 网站（pc,mobile）小程序，Native App（ReactNaive App）,node后端
export default class Login extends Component {
  render() {
    return (
      <div className="form">
        <div className="logo">
          <img src={config.logoPath} alt="logo"/>
          <span>{config.siteName}</span>
        </div>
        <Form>
        <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: '请输入您的账号！' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: '请输入您的密码！' }]}
      >
        <Input.Password />
      </Form.Item>
            <Row>
               <Button type="primary" htmlType="submit">Sign in</Button> 
               <p>
               <span className="margin-right">
                Username:guest
              </span>
              <span>Password :guest</span>
               </p>
            </Row>
        </Form>
      </div>
    )
  }
}
