import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import ElfDebugEnzyme from '../ElfDebugEnzyme';

//const elfDebugEnzyme = new ElfDebugEnzyme(true, 'App.test.js');

class App extends Component {
    constructor() {
        super();
        this.state = {
            nine: '0'
        }
    }
    getNine = () => {
        console.log('state');
        this.setState({nine: '9'})
    };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <p className="App-intro">Nine: {this.state.nine}</p>
          <button className='elf' onClick={this.getNine}>Get Nine</button>
      </div>
    );
  }
}

export default App;
