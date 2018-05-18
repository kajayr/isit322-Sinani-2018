import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import AppInit from './app-init';

import '../images/App.css';
import 'whatwg-fetch';
import GetFoo from "./GetFoo";
import GetGit from "./GetGit";

/*
const appInit = {
    file: 'File name will be placed here.',
    status: 'status will go here',
    result: 'result will go here',
};*/

class App extends Component {


    render() {
        return (
            <div className="App">
                // CODE TO LOAD OTHER COMPONENTS OMITTED
                <AppInit appInit={AppInit} />
                <GetFoo getFoo={GetFoo} />
                <GetGit getGit={GetGit}/>

            </div>
        );
    }
}

export default App;