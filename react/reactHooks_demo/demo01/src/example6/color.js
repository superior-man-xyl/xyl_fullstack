import React, { createContext, useReducer } from 'react';

export const colorContext=createContext({});

export const UPDATE_COLOR="UPDATE_COLOR"

const reducer =(state,action)=>{
    switch(action.type){
        case "UPDATE_COLOR":
            return action.color;
        break;
        default:return state
    }
}

export const Color=props=>{
    const [color,dispatch]=useReducer(reducer,"blue");
    return (
        <colorContext.Provider value={{color,dispatch}}>
            {props.children}
        </colorContext.Provider>
    )
}