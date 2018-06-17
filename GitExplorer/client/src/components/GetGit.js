import React, {Component} from 'react';
import 'whatwg-fetch';
import styles from './elf-styles';
import Button from '@material-ui/core/Button';

class GetGit extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            avatarUrl: '',
            id: '',
            public_gists: '',
            bio: '',
            company: '',
            location: ''
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
            let theBody = JSON.parse(json.body);
            // that.setState(word => {word: json.login});
            that.setState({
                name: theBody.name,
                avatarUrl: theBody.avatar_url,
                id: theBody.id,
                public_gists: theBody.public_gists,
                bio: theBody.bio,
                company: theBody.company,
                location: theBody.location
            });
            console.log('it happened');
        }).catch(function (ex) {
            console.log('parsing failed', ex);
        });
    };

    render() {
        return (
            <div className="App">

                <img id={"leoPic"} alt={" "} src={this.state.avatarUrl}/>
                <p>Name: {this.state.name}</p>
                <p>ID: {this.state.id}</p>
                <p>Public Gists: {this.state.public_gists}</p>
                <p>Bio: {this.state.bio}</p>
                <p>Location: {this.state.location}</p>
                <p>Company: {this.state.company}</p>

                <Button
                variant="raised"
                color="primary"
                onClick={this.getGit}
                id="getGit"
            >
            Click For Git
        </Button>
                {/*<button className="getGit" onClick={this.getGit}>Click for Git</button>*/}

            </div>
        );
    }
}

export default GetGit;