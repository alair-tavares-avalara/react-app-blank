import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CheckboxWithLabel from './CheckboxWithLabel';
import { shallow, mount, render } from 'enzyme';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('CheckboxWithLabel changes the text after click', () => {
    // Render a checkbox with label in the document
    const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

    expect(checkbox.text()).toEqual('Off');

    checkbox.find('input').simulate('change');

    expect(checkbox.text()).toEqual('On');
});