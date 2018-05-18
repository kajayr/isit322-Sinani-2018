import React, {Component} from 'react';
import 'whatwg-fetch';

class GetGit extends Component{
    constructor(){
        super();
        this.state ={
            name: '',
            avatarUrl: ''
        };
    }
    getGit = () => {
        const that = this;
        fetch('/api/user')
            .then(function (response) {
                //that.debug('GETONE-FETCH-ONE');
                return response.json();
            }).then(function (json) {
            //that.debug('GETONE-FETCH-TWO');
            console.log('parsed json', json);
            //let theData = JSON.stringify(json.login);
            // that.setState(word => {word: json.login});
            that.setState({name: json.name, avatarUrl: json.avatar_url})
            console.log('it happened');
        }).catch(function (ex) {
            console.log('parsing failed', ex);
        });
    };
    render() {
        return (
            <div className="App">

                <p className="App-intro">
                    state.word:{this.state.word}
                </p>
                <img src={this.state.avatarUrl}/>
                <p>Name: {this.state.name}</p>

                <button className="getGit" onClick={this.getGit}>Click for Git</button>

            </div>
        );
    }
}
export default GetGit;