import React from 'react';
require('../../__mocks__/fetch');
import {shallow, mount} from 'enzyme';
//import ElfDebug from '../ElfDebug';
import ReactDOM from 'react-dom';
import GetUserInfo from '../components/GetUserInfo';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GetUserInfo />, div);
    ReactDOM.unmountComponentAtNode(div);
});
describe('My GetUserInfo tests', function () {
it('renders state of File paragraph after button click', (done) => {
    const wrapper = shallow(<GetUserInfo getUserInfo={GetUserInfo} />);
    const statusParagraph = <p className="App-intro">status: Mock Server Happy</p>;
    wrapper.find('#getApp').simulate('click');
    setTimeout(() => {
        wrapper.update();
    //    console.log(wrapper.debug());
  //      elfDebugEnzyme.getFirst(wrapper, 'p');
        expect(wrapper.contains(statusParagraph)).toBe(true);
        done();
    }, 1);
});

it('renders file of File paragraph after button click', (done) => {
    const wrapper = shallow(<GetUserInfo getUserInfo={GetUserInfo} />);
    const fileParagraph = <p className="App-intro">file: api.js</p>;
    wrapper.find('#getApp').simulate('click');
    setTimeout(() => {
        wrapper.update();
   //     console.log(wrapper.debug());
        //      elfDebugEnzyme.getFirst(wrapper, 'p');
        expect(wrapper.contains(fileParagraph)).toBe(true);
        done();
    }, 1);
});
});