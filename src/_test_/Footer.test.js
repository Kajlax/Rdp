import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../components/Footer';

it('renders without crashing', () => {
  const footer = shallow(<Footer />);
});

it('has facebook icon', () => {
  const footer = shallow(<Footer />);
  const x = <i className="facebook square icon big" />;
  expect(footer.contains(x)).toEqual(true);
});

it('has twitter icon', () => {
  const footer = shallow(<Footer />);
  const x = <i className="twitter square icon big" />;
  expect(footer.contains(x)).toEqual(true);
});
