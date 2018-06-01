import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import { red500 } from 'material-ui/styles/colors';
import styles from './elf-styles';
import RaisedButton from 'material-ui/RaisedButton';

class GetFoo extends Component{
    constructor(){
        super(      );
        this.state ={
            file:'the result will be placed here',
            foo:'waiting for server',
            status:'waiting for server'
        };
    }
    getFoo = () => {
        const that = this;
        fetch('/api/foo')
            .then(function (response) {
               // that.debug('GETONE-FETCH-ONE');
                return response.json();
            }).then(function (json) {
           // that.debug('GETONE-FETCH-TWO');
            //that.debug('parsed json', json);
            that.setState(foo => (json));
        }).catch(function (ex) {
            console.log('parsing failed', ex);
        });
    };

    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    file: {this.state.file}
                </p>

                <p className="App-intro">
                    status: {this.state.status}
                </p>
                <RaisedButton
                    label="Get Foo"
                    labelPosition="before"
                    primary={true}
                    icon={<FontIcon
                        class="material-icons"
                        color={red500}>rss_feed</FontIcon>}
                    style={styles.button}
                    onClick={this.getFoo}
                />
                {/*<button id="getFoo" onClick={this.getFoo}>Get Foo</button>*/}
                <br />
                <div id={"FirstP"}>
                    <p id={"p1"}> The good life is a process, not a state of being. It is a direction not a destination.
                    </p>
                </div>
            </div>
        );
    }
}
export default GetFoo;