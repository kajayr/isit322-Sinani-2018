import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const myProps = {
    testProp: 3,
};

const testProp=2;

const testProps = {
    testProp: 222
};

ReactDOM.render(<App myProps={myProps} testProps = {testProps}/>, document.getElementById('root'));
registerServiceWorker();

