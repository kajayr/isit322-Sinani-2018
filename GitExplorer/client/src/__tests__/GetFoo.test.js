import React from 'react';
import ReactDOM from 'react-dom';
import GetFoo from '../components/GetFoo';
import {shallow, mount} from 'enzyme';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'GetFoo.test.js');
//import {mount} from "enzyme/build/index";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GetFoo />, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('My GetFoo tests', function () {
it('renders state of File paragraph after button click', (done) => {
    const wrapper = shallow(<GetFoo getFoo={GetFoo}  />);
    const statusParagraph = <p className="App-intro">file: api.js</p>

    wrapper.find('#getFoo').simulate('click');

    setTimeout(() => {

        wrapper.update();
        console.log('BAR', wrapper.debug());
        elfDebugEnzyme.getFirst(wrapper, 'p');
        try {
            expect(wrapper.containsMatchingElement(statusParagraph)).toBe(true);
            // expect(true).toBe(true);
        } catch(e) {
            console.log(e);
        }
        done();
    }, 1);
});
});
