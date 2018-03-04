import React from 'react';
import { shallow } from 'enzyme';

import Type from './Type';

describe('<Type />', () => {
  it('Renders without crashing', () => {
    shallow(<Type />);
  });
});
