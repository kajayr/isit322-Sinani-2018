import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import { red500 } from 'material-ui/styles/colors';
import styles from './elf-styles';
import  { Text, View, Button } from 'react-native';


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
             <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Get Foo
                </Text>
                
                <Text className="App-intro">
                    file: {this.state.file}
                </Text>

                <Text className="App-intro">
                    status: {this.state.status}
 				</Text>
                <View style={styles.buttonView}>
					<Button
					    onPress={this.getFoo}
					    title="Get Foo"
					    color="#841584"
					    accessibilityLabel="Learn more about this purple button"
					  />
				</View>
                
                   <View id={"FirstP"}>
                    <Text id={"p1"}> The good life is a process, not a state of being. It is a direction not a destination.
                    </Text>
                </View>
            </View>
        );
    }
}
export default GetFoo;