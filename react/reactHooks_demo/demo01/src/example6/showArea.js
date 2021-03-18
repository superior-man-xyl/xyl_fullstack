import React  from "react";
import {colorContext} from './color'
import { useContext } from 'react';

function ShowArea(){
    const {color}=useContext(colorContext)
    return (
        <div style={{color:color}}>字体为{color}</div>
    )
}

export default ShowArea;