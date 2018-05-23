import React, {Component} from 'react';
//import leo from  '../images/leo.svg';
import '../css/App.css';
import 'whatwg-fetch';

class GetUserInfo extends Component {
    constructor() {
        super();
        this.state = {
            file: 'Get Nine Result will be placed here.',
            status: 'waiting for server',
            getUser: 'This is my getUser'
        };

    }

    callServer = () => {
        const that = this;
        fetch('/api/foo')
            .then(function(response) {
                return response.json();
            }).then(function(json) {
            console.log('parsed json', json);
            that.setState(foo => (json));
        }).catch(function(ex) {
            console.log('parsing failed', ex);
        });
    };

    render() {
        return (
            <div className="App">
                {/*<div className="App-header">*/}
                    {/*<img src={leo} className="App-logo" alt="leo"/>*/}
                    {/*<h2>Welcome to React</h2>*/}
                {/*</div>*/}

                <p className="App-intro">
                    file: {this.state.file}
                </p>

                <p className="App-intro">
                    status: {this.state.status}
                </p>

                <button id="getApp" onClick={this.callServer}>Bar</button>
            </div>
        );
    }
}

export default GetUserInfo;
