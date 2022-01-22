import React from 'react';
import { render, screen } from '@testing-library/react';
import Articles from '../Articles';

const posts = [
  {
    node: {
      excerpt: 'snippet of post',
      frontmatter: {
        title: 'Some post title',
        date: 'June 12, 2020',
        description: '',
      },
      fields: {
        slug: '/post-number-one/',
      },
    },
  },
];
const externalPosts = [
  {
    link: 'https://dev.to/laney/cool-thingy',
    title: 'A cool thing I wrote',
  },
  {
    link: 'https://google.com/more-stuff',
    title: 'Another thing',
  },
];

describe('Articles', () => {
  it('should display hosted and external article links', () => {
    render(<Articles posts={posts} externalPosts={externalPosts} />);

    expect(screen.getByRole('link', { name: 'Some post title' })).toHaveAttribute(
      'href',
      '/post-number-one/'
    );
    expect(screen.getByRole('link', { name: 'A cool thing I wrote' })).toHaveAttribute(
      'href',
      'https://dev.to/laney/cool-thingy'
    );
    expect(screen.getByRole('link', { name: 'Another thing' })).toHaveAttribute(
      'href',
      'https://google.com/more-stuff'
    );
  });
});
