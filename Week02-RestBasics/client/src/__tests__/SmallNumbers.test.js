import React from 'react';
import ReactDOM from 'react-dom';
import SmallNumbers from '../components/SmallNumbers';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SmallNumbers />, div);
    ReactDOM.unmountComponentAtNode(div);
});