import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { NavLink } from 'react-router-dom';
import axios from 'axios';//使用mock
import './index.css';

const { Meta } = Card;
const CenterContainer=()=>{
    const [cardList,setCardList]=useState([]);
    const getTagAPIList=()=>{
        axios
            .get('/card')
            .then(res=>{
                console.log(res);
                let cards=res.data.cards.result.list;
                setCardList(cards)
                console.log(cards);
            })
    }
    useEffect(()=>{
        getTagAPIList();
    },[])
    return (//CardList现在是一个长度为8的数组，有8个对象，对象里有list数组，name类名
        <>
            <div className="Center">
                {
                    cardList.map((item)=>{
                        return (
                            <Card
                                hoverable
                                style={{ width: 150 }}
                                cover={<img alt="example" src={item.pic} />}
                            >
                                <Meta title={item.name} description={item.tag} />
                            </Card>
                        )
                    })
                }
            </div>
            
        </>
    )
}
export default CenterContainer
