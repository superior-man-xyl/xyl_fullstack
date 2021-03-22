import React, { useEffect, useState } from 'react';
import { Tag, Divider } from 'antd';
import { NavLink } from 'react-router-dom';
import axios from 'axios';//使用mock
import './index.css';

const NavRight=()=>{
    const [tagList,setTagList]=useState([]);
    const getTagAPIList=()=>{
        axios
            .get('/tags')
            .then(res=>{
                // console.log(res);
                let tags=res.data.tags.result;
                // console.log(tags);
                setTagList(tags)
                // console.log(tagList);//获取值result成功
            })
    }
    useEffect(()=>{
        getTagAPIList();
    },[])
    return (//tagList现在是一个长度为11的数组，有11个对象，对象里有list数组，name类名
        <>
            <div className="NavRightHeader">热门标签&nbsp;&nbsp;<a>更多</a></div>
            <div className="NavRightList">
                {
                tagList.map((item)=>{
                    return (<>
                    <Divider orientation="left">{item.name}</Divider>
                    {
                        item.list.map((item2)=>{
                            return(
                                
                                    <Tag color="magenta">{item2.name}</Tag>
                                
                            )
                        })
                    }
                    </>
                    )
                })
            }
            </div>
            
        </>
    )
}
export default NavRight
