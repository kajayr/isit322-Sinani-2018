import React, {Component} from 'react';
import leo from  '../images/leo.svg';
import '../css/index.css';

class Header extends Component{
    render(){
        return(
        <div className="App-header">
            <img src={leo} className="App-logo" alt ="logo"/>
            <h1 className="fancy">Welcome to Leo Sky App</h1>

        </div>
        );
    }
}
export default Header;