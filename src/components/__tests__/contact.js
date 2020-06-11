import React from 'react';
import { render as testRender } from '@testing-library/react';
import { PureContact as Contact } from '../contact';

describe('Contact', () => {
  it('should match snapshot', () => {
    const data = {
      site: {
        siteMetadata: {
          social: {
            github: 'my-github-username',
            linkedin: 'my-linkedin-username',
            email: 'me@theinternet.com',
          },
        },
      },
    };
    const { container } = testRender(<Contact data={data} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
