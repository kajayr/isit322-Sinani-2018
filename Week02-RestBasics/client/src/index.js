import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/index';
import AppInit from './components/app-init';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />,
    document.getElementById('root'));
registerServiceWorker();
