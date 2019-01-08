import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Pokedex from './Pokedex';

// smoke test
it('renders without crashing', () => {
  shallow(<Pokedex />);
});

// snapshot test
it('matches snapshot', () => {
  let wrapper = shallow(<Pokedex />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
