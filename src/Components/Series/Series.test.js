import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Series from './Series';
import Chart from '../Chart/Chart';

configure({ adapter: new Adapter() });

describe('<Series />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Series />);
  });

  it('should render two <Chart /> elements', () => {
    expect(wrapper.find(Chart)).toHaveLength(2);
  });
});
