import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HelloComponent } from './hello';//该组件写在hello.tsx里

ReactDOM.render(
    <HelloComponent username="传参名"/>,
    document.getElementById('root')
);