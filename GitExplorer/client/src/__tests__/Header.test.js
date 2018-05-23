import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import {shallow, mount} from 'enzyme';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'Header.test.js');

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('My Header tests', function () {
    // import ElfDebugEnzyme from './ElfDebugEnzyme';
    const elfDebugEnzyme = new ElfDebugEnzyme(true, 'Header.test.js');

    it('renders and reads H1 text', () => {
        const wrapper = shallow(<Header header={Header}  />);
        const welcome = <h1 className="fancy">Welcome to Leo Sky App</h1>;
        elfDebugEnzyme.getFirst(wrapper, 'h1');
                expect(wrapper.contains(welcome)).toEqual(true);
    });

    // MORE CODE HERE AND ELSEWHERE
});
