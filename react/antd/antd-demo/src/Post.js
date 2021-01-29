import React, { Component } from 'react';
import './Post.css'
import { Table, Tabs, Avatar } from 'antd'
// import Avatar from 'antd/lib/avatar/avatar';
const { TabPane } = Tabs
const EnumPostStatus = { // 文章有不同的状态 
  UNPUBLISH: 1, // 私有
  PUBLISHED: 2, // 公开的
}
// Post 列表 后台就是做这样的事情 
export default class Post extends Component {
  constructor() {
    super();
    this.state = {
      status: 1
    }
  }
  handleTabClick(key){
    this.setState({
        status:key
    })
  }
  render() {
    const { status } = this.state;
    const columns=[
        {
            title:'Image',
            dataIndex:'image',
            //当我们的字段要加工时
            render:text=><Avatar shape="square" src={text} />
        },
        {
            title: 'Title',
            dataIndex: 'title'
          },
          {
            title: 'Author',
            dataIndex: 'author'
          },
          {
            title: 'Categories',
            dataIndex: 'categories'
          },
          {
            title: 'Tags',
            dataIndex: 'tags'
          },
          {
            title: 'Views',
            dataIndex: 'views'
          },
          {
            title: 'Date',
            dataIndex: 'date'
          },
    ]
    const data=[{
        'image':'https://img.36krcdn.com/20200403/v2_443a3bcfe66446ba93a3b0b82a186a16_img_000',
        'title':'ddddd',
        'author':'王家卫',
        'categories':'xxxxxx',
        'tags':'html5',
        'views':200,
        'date': '2021年1月22日 13:15:20'
    },{
        'image':'https://img.36krcdn.com/20200403/v2_443a3bcfe66446ba93a3b0b82a186a16_img_000',
        'title':'ddddd',
        'author':'王家卫',
        'categories':'xxxxxx',
        'tags':'html5',
        'views':200,
        'date': '2021年1月22日 13:15:20'
    },{
        'image':'https://img.36krcdn.com/20200403/v2_443a3bcfe66446ba93a3b0b82a186a16_img_000',
        'title':'ddddd',
        'author':'王家卫',
        'categories':'xxxxxx',
        'tags':'html5',
        'views':200,
        'date': '2021年1月22日 13:15:20'
    },{
        'image':'https://img.36krcdn.com/20200403/v2_443a3bcfe66446ba93a3b0b82a186a16_img_000',
        'title':'ddddd',
        'author':'王家卫',
        'categories':'xxxxxx',
        'tags':'html5',
        'views':200,
        'date': '2021年1月22日 13:15:20'
    }]
    return (
      <div>
        <Tabs 
          activeKey={
            status == String(EnumPostStatus.UNPUBLISH)
            ? String(EnumPostStatus.UNPUBLISH)
            : String(EnumPostStatus.PUBLISHED)
          }
          onTabClick={this.handleTabClick.bind(this)}
          >
            <TabPane tab="Published"
              key={String(EnumPostStatus.PUBLISHED)}>
            </TabPane>
            <TabPane tab="UnPublished"
             key={String(EnumPostStatus.UNPUBLISH)}
            >
            </TabPane>
        </Tabs>
        <Table columns={columns} dataSource={data}>

        </Table>
      </div>
    )
  }
}
