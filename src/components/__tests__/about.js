import React from 'react';
import { render } from '@testing-library/react';

import About from '../about';

describe('About', () => {
  it('should match snapshot', () => {
    const { container } = render(<About />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
