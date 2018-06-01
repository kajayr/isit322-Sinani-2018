import React, {Component} from 'react';
import leo from  '../images/sun.png';
import '../css/index.css';
import {Link} from "react-router-dom";
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';



class ElfHeader extends Component{
    render(){
        return(
        <div className="App-header">
            <div id={"head"}>

                <Link  to="/">Home Page </Link>&nbsp;&nbsp;<b>|</b>&nbsp;&nbsp;
                        <Link to="/GetGit">Get User</Link>&nbsp;&nbsp;<b>|</b>&nbsp;&nbsp;
                        <Link to="/GetFoo">Get Foo</Link>&nbsp;&nbsp;<b>|</b>&nbsp;&nbsp;
                <Link to="/SmallNumbers">Phone Number</Link>
                <AppBar
                    title="GitExplorer"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonClick={this.handleToggle}
                />

            </div>
            <img src={leo} className="App-logo" alt ="logo"/>
            <h1 className="fancy">Welcome to Sky App</h1>
        </div>
        );
    }
}
export default ElfHeader;