import React from 'react';
import ReactDOM from 'react-dom';
import GetFoo from '../components/GetFoo';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GetFoo />, div);
    ReactDOM.unmountComponentAtNode(div);
});