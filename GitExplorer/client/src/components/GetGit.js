import React, {Component} from 'react';
import 'whatwg-fetch';
import FontIcon from 'material-ui/FontIcon';
import { red500 } from 'material-ui/styles/colors';
import styles from './elf-styles';
import RaisedButton from 'material-ui/RaisedButton';

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

                <RaisedButton
                    label="Click for Git"
                    labelPosition="before"
                    primary={true}
                    icon={<FontIcon
                        class="material-icons"
                        color={red500}>rss_feed</FontIcon>}
                    style={styles.button}
                    onClick={this.getGit}
                />
                {/*<button className="getGit" onClick={this.getGit}>Click for Git</button>*/}

            </div>
        );
    }
}

export default GetGit;