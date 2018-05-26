import React from 'react';
import ReactDOM from 'react-dom';
import ElfHeader from '../components/ElfHeader';
import {shallow, mount} from 'enzyme';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'Header.test.js');
import {MemoryRouter} from "react-router-dom";

it('renders without crashing', () => {
    const div = document.createElement('div');
    <MemoryRouter>
    ReactDOM.render(<ElfHeader />, div);
    </MemoryRouter>
    ReactDOM.unmountComponentAtNode(div);
});

describe('My Header tests', function () {
    // import ElfDebugEnzyme from './ElfDebugEnzyme';
    const elfDebugEnzyme = new ElfDebugEnzyme(true, 'Header.test.js');

    it('renders and reads H1 text', () => {
        const wrapper = shallow(<ElfHeader ElfHeader={ElfHeader}  />);
        const welcome = <h1 className="fancy">Welcome to Sky App</h1>;
        elfDebugEnzyme.getFirst(wrapper, 'h1');
                expect(wrapper.contains(welcome)).toEqual(true);
    });

    describe('My MemoryRouter Header tests', function () {
        const elfDebugEnzyme = new ElfDebugEnzyme(true, 'Header.test.js');
        it('renders without crashing', () => {
            const wrapper = shallow(<ElfHeader header={ElfHeader}/>);
            const div = document.createElement('div');
            ReactDOM.render(<MemoryRouter><ElfHeader/></MemoryRouter>, div);
            ReactDOM.unmountComponentAtNode(div);
        });
    });
 });


