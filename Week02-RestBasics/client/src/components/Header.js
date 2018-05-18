import React, {Component} from 'react';
import leo from  '../images/leo.svg';
import '../index.css';

class Header extends Component{
    render(){
        return(
        <div className="App-header">
            <img src={leo} className="App-logo" alt ="logo"/>
            <h2>Welme to Leos App</h2>

        </div>
        );
    }
}
export default Header;