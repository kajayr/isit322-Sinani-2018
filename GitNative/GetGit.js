import React, {Component} from 'react';
import 'whatwg-fetch';
import FontIcon from 'material-ui/FontIcon';
import { red500 } from 'material-ui/styles/colors';
import styles from './elf-styles';
import  { Text, View, Button } from 'react-native';

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
            <View className="App">
                <Text>Name: {this.state.name}</Text>
                <Text>ID: {this.state.id}</Text>
                <Text>Public Gists: {this.state.public_gists}</Text>
                <Text>Bio: {this.state.bio}</Text>
                <Text>Location: {this.state.location}</Text>
                <Text>Company: {this.state.company}</Text>


			<View style={styles.buttonView}>
    		<Button
       			 onPress={this.getGit}
        		 title="Get Data"
       			 color="#841584"
       			 accessibilityLabel="Learn more about this purple button"
   					/>
			</View>
          
                {/*<button className="getGit" onClick={this.getGit}>Click for Git</button>*/}

            </View>
        );
    }
}
/*      <RaisedButton
                    label="Click for Git"
                    labelPosition="before"
                    primary={true}
                    icon={<FontIcon
                        class="material-icons"
                        color={red500}>rss_feed</FontIcon>}
                    style={styles.button}
                    onClick={this.getGit}
                />*/
export default GetGit;