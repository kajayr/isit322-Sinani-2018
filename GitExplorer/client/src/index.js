import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/index';
//import AppInit from './components/app-init';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.css';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import gistReducer from './assets/gist-reducer';

const themeDark = createMuiTheme({
    palette: {
        type: 'dark'
    }
});

let store = createStore(gistReducer);

ReactDOM.render(
    <MuiThemeProvider theme={themeDark}>
        <Provider store={store}>
        <App />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);

registerServiceWorker();