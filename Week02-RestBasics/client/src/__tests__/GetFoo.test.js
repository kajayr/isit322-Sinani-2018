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
it('renders state of File paragraph after button click', () => {
    const wrapper = shallow(<GetFoo getFoo={GetFoo}  />);
    const statusParagraph = <p className="App-intro">status: Mock Server Happy</p>;
    wrapper.find('#getFoo').simulate('click');
    setTimeout(() => {
        wrapper.update();
        //elfDebugEnzyme.getFirst(wrapper, 'p');
        expect(wrapper.contains(statusParagraph)).toBe(true);
        //done();
    }, 1);
});

