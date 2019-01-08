import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Pokecard from './Pokecard';

// smoke test
it('renders without crashing', () => {
  shallow(<Pokecard />);
});

// snapshot test
it('matches snapshot', () => {
  let wrapper = shallow(<Pokecard />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
