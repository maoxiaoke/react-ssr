const path = require( 'path' );

// 忽略所有的样式文件导入 https://github.com/bkonkle/ignore-styles/blob/master/ignore-styles.js
// Question: 如果使用了 css modules，该怎么处理 https://stackoverflow.com/questions/34615898/react-server-side-rendering-of-css-modules
require( 'ignore-styles' );

// 在 Node 端 import 了 React Component，需要使用到 babel 来编译（类似于客户端）
require('@babel/register')( {
    configFile: path.resolve( __dirname, '../babel.config.js' ),
} );

// import express server
require( './express.js' );