import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Footer from '../components/Footer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has facebook icon', () => {
  const footer = shallow(<Footer />);
  const x = <i className="facebook square icon big" />;
  expect(footer.contains(x)).toEqual(true);
});