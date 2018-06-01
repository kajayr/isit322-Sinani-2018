import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import { red500 } from 'material-ui/styles/colors';
import styles from './elf-styles';
import RaisedButton from 'material-ui/RaisedButton';

class SmallNumbers extends Component{
    constructor(){
        super();
        this.state={
            x:'xxx',
        xx:'xxx',
            xxx:'xxx'

        };
    }
     getNumbers= () => {
        this.setState({x:'425', xx: '444', xxx: '0923'})
     };

    render(){
        return(
            <div className="App">
                <p className= "App-intro">
                    {this.state.x}-
                        {this.state.xx}-
                            {this.state.xxx}
                        </p>
                <RaisedButton
                    label="Show the Number"
                    labelPosition="before"
                    primary={true}
                    icon={<FontIcon
                        class="material-icons"
                        color={red500}>rss_feed</FontIcon>}
                    style={styles.button}
                    onClick={this.getNumbers}
                />
                {/*<button className="getOne" onClick={this.getNumbers}>Show The Number</button>*/}
            </div>
        );
    }
}
export default SmallNumbers;