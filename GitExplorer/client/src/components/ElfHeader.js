import React, {Component} from 'react';
import leo from  '../images/sun.png';
import '../css/index.css';
import {Link} from "react-router-dom";
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';



class ElfHeader extends Component{
    constructor(props){
        super(props);
        this.state ={
           open: false
        };
    }
    handleToggle = () => this.setState({ open: !this.state.open });
    render(){
        return(

            <div>
                <img src={leo} className="App-logo" alt ="logo"/>
                <h1 className="fancy">Welcome to Sky App</h1>
                <AppBar
                    title="GitExplorer"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonClick={this.handleToggle}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={this.handleToggle}
                >
                    <AppBar title="Git Explorer"/>

                    <MenuItem
                        primaryText='Home Page'
                        containerElement={<Link to="/"/>}
                        onClick={this.handleToggle}
                    />
                    <MenuItem
                        primaryText='Get Git'
                        containerElement={<Link to="/GetGit"/>}
                        onClick={this.handleToggle}
                    />
                    <MenuItem
                        primaryText='Get Foo'
                        containerElement={<Link to="/GetFoo"/>}
                        onClick={this.handleToggle}
                    />
                    <MenuItem
                        primaryText='Phone Number'
                        containerElement={<Link to="/SmallNumbers"/>}
                        onClick={this.handleToggle}
                    />
                </Drawer>
            </div>
        );
    }
}
/*<div className="App-header">
    <div id={"head"}>

        <Link  to="/">Home Page </Link>&nbsp;&nbsp;<b>|</b>&nbsp;&nbsp;
                <Link to="/GetGit">Get User</Link>&nbsp;&nbsp;<b>|</b>&nbsp;&nbsp;
                <Link to="/GetFoo">Get Foo</Link>&nbsp;&nbsp;<b>|</b>&nbsp;&nbsp;
        <Link to="/SmallNumbers">Phone Number</Link>
    </div>
    <img src={leo} className="App-logo" alt ="logo"/>
    <h1 className="fancy">Welcome to Sky App</h1>
</div>*/
export default ElfHeader;