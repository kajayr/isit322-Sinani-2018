import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import ElfHeader from './ElfHeader';
import '../css/menu.css';
import '../css/App.css';
import 'whatwg-fetch';
import GetFoo from "./GetFoo";
import GetGit from "./GetGit";
import SmallNumbers from "./SmallNumbers";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <ElfHeader/>
                    <Route exact path="/GetFoo" component={GetFoo}/>
                    <Route exact path="/GetGit" component={GetGit}/>
                    <Route exact path="/SmallNumbers" component={SmallNumbers}/>
                </div>
            </BrowserRouter>

        );
    }
}
export default App;