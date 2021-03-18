import React, { Fragment } from 'react';
import Buttons from './Button';
import ShowArea from './showArea';
import {Color} from './color'

function App(){
    return(
        <Fragment>
            <Color>
            <ShowArea />
            <Buttons></Buttons>
            </Color>
        </Fragment>
    )
}
export default App;