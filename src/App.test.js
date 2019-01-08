import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders using mount', () => {
  mount(<App />);
});

it('matches snapshot', () => {
  let wrapper = mount(<App />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
