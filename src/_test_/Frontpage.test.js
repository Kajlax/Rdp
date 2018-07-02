import React from 'react';
import { shallow } from 'enzyme';
import Frontpage from '../components/Frontpage';

it('renders without crashing', () => {
  const frontpage = shallow(<Frontpage />);
});
