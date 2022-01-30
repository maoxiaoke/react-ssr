import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// import App components
import { App } from './components/app';

// 注水过程（三体模型），为 HTML 元素添加一些事件监听器
ReactDOM.hydrate( <BrowserRouter><App/></BrowserRouter>, document.getElementById( 'app' ) );
