import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import Header from './Header';
import GetUserInfo from './GetUserInfo';

import '../css/App.css';
import 'whatwg-fetch';
import GetFoo from "./GetFoo";
import GetGit from "./GetGit";

class App extends Component {


    render() {
        return (
            <div className="App">
                {/* CODE TO LOAD OTHER COMPONENTS OMITTED*/}
                <Header Header={Header} />
                <GetGit getGit={GetGit}/>
                <GetFoo getFoo={GetFoo} />
                <GetUserInfo getUserInfo={GetUserInfo}/>
            </div>
        );
    }
}
export default App;