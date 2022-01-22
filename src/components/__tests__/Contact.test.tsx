import React from 'react';
import { render, screen } from '@testing-library/react';
import { PureContact as Contact } from '../Contact';

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

describe('Contact', () => {
  it('should display contact links', () => {
    render(<Contact data={data} />);

    expect(screen.getByRole('link', { name: 'github.com/my-github-username' })).toHaveAttribute(
      'href',
      'https://github.com/my-github-username'
    );
    expect(
      screen.getByRole('link', { name: 'linkedin.com/in/my-linkedin-username' })
    ).toHaveAttribute('href', 'https://linkedin.com/in/my-linkedin-username');
    expect(screen.getByRole('link', { name: 'me@theinternet.com' })).toHaveAttribute(
      'href',
      'mailto:me@theinternet.com'
    );
  });

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
    const { container } = render(<Contact data={data} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
