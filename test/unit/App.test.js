import * as React from 'react';
import App from '../../src/App';
import {shallow, configure  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.React = React;

configure({adapter: new Adapter()});
it("renders without crashing", () => {
    shallow(<App />);
});

it("renders Account header", () => {
  const wrapper = shallow(<App />);
  const rowClass  = wrapper.find('.row');
    expect(rowClass).toHaveLength(2);
});
