import React, {Component} from 'react';
import leo from  '../images/sun.png';
import '../css/index.css';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { gitItems, demoItems } from './tileData';

const styles = {
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1
    },
};



class ElfHeader extends Component{
    constructor(props){
        super(props);
        this.state ={
           open: false
        };
    }
    handleToggle = () => this.setState({ open: !this.state.open });
    render(){
        const { classes } = this.props;
        const sideList = (
            <div className={classes.list}>
    <List>{gitItems}</List>
        <Divider />
        <List>{demoItems}</List>
        </div>
    );
        return(

            <div>
                <img src={leo} className="App-logo" alt ="logo"/>
                <h1 className="fancy">Welcome to Sky App</h1>
                <AppBar position="static">
            <Toolbar>
            <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={this.handleToggle}
                >
                    <MenuIcon/>
             </IconButton>
                <Typography variant="title" color="inherit" className={classes.flex}>
                GitExplorer
                </Typography>
            </Toolbar>

                        </AppBar>
        <Drawer open={this.state.open} onClose={this.handleToggle}>
    <div
        role="button"
        onClick={this.handleToggle}
        onKeyDown={this.handleToggle}
    >
        {sideList}
    </div>
        </Drawer>
            </div>
        );
    }
}

ElfHeader.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ElfHeader);