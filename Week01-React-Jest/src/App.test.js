import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import ElfDebugEnzyme from '../ElfDebugEnzyme';

const elfDebugEnzyme = new ElfDebugEnzyme(true, 'App.test.js');
configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Jest Create React Tests', function () {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('renders and reads H1 text', () => {
        const wrapper = shallow(<App />);
        const welcome = <h1 className="App-title">Welcome to React</h1>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and reads H1 text', () => {
        const wrapper = shallow(<App />);
        const welcome = <h1 className="App-title">Welcome to React</h1>;
        elfDebugEnzyme.getFirst(wrapper, 'h1', true);
        expect(wrapper.contains(welcome)).toEqual(true);
    });
    it('renders button click message', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">Nine: 9</p>;
        wrapper.find('button.elf').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });
    });