/*
 * Main file that will be rendered
 * No need to change anything here
 * All it does is take the content from app.js and renders it on the webpage
*/
import React from 'react';
import ReactDom from 'react-dom';
import App from './app.js';

ReactDom.render(<App />, document.getElementById('root'));