import * as React from 'react';
import {Header} from './components';

//泛型里先用{}空对象,因为不需要外面来限定
export const App:React.FC<{}>=(props)=>{
    return (
        <div className="constainer-fluid">
            <Header />
            {props.children}
            {/* 子路由 */}
        </div>
    )
}