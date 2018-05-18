import React from 'react';
import ReactDOM from 'react-dom';
import AppInit from '../components/app-init';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppInit />, div);
    ReactDOM.unmountComponentAtNode(div);
});
