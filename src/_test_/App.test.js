import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';


it('renders without crashing', () => {
  const wrap = shallow(<App />)
});
