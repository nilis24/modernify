import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import Sidebar from './components/sidebar/sidebar';
import Topbar from './components/topbar/topbar'
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(<Sidebar />, document.getElementById('root'));

ReactDOM.render(<Topbar />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
