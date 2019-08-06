import React from  'react';
import ReactDOM from 'react-dom';
import Helloworld from './componets/Helloworld';

ReactDOM.render(<div><h1>Hello React</h1>
<p>every thing inside one div</p></div>,document.getElementById('root'))

//gets overwritten

ReactDOM.render(
<Helloworld/>
,document.getElementById('root'))