import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';

export default class App extends React.Component {
  render() {
    return (
    	<NativeRouter>
      <View style={styles.container}>
      	<ElfHeader />
        <GetFoo />
      </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
