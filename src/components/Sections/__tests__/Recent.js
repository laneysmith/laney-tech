import React from 'react';
import { render } from '@testing-library/react';

import Recent from '../Recent';

describe('Recent', () => {
  it('should match snapshot', () => {
    const { container } = render(<Recent />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
