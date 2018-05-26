import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/index';
//import AppInit from './components/app-init';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><App /></div>,
    document.getElementById('root'));
registerServiceWorker();
