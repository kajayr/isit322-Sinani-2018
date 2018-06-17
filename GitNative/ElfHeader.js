import React, {Component} from 'react';
import leo from  '../images/sun.png';
import '../css/index.css';
import {Link} from "react-router-dom";
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {Link} from 'react-router-native';
import {Text, View} from 'react-native';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import styles from "./elf-styles";


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

            <View style={styles.nav}>
            <Link
                    to="/"
                    underlayColor='#f0f4f7'
                    style={styles.navItem}>
                    <Text>Home Page</Text>
                </Link>
                <Link
                    to="/GetGit"
                    underlayColor='#f0f4f7'
                    style={styles.navItem}>
                    <Text>Get Git</Text>
                </Link>
                <Link
                    to="/GetFoo"
                    underlayColor='#f0f4f7'
                    style={styles.navItem}>
                    <Text>Get Foo</Text>
                </Link>
                <Link
                    to="/SmallNumbers"
                    underlayColor='#f0f4f7'
                    style={styles.navItem}>
                    <Text>Small Numbers</Text>
                </Link>       
            </View>
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