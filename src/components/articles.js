import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Section from './section';
import List from './section/list';
import ListItem from './section/listItem';
import ExternalLinkIcon from '../icons/external-link.svg';

const icons = ['📘', '📗', '📙', '📕'];
const getIconByIndex = index => icons[index % icons.length];

const Articles = ({ posts, externalPosts }) => {
  const allPosts = [...posts, ...externalPosts];

  if (allPosts.length === 0) {
    return null;
  }

  return (
    <Section id="articles-section" title="Articles">
      <List>
        {allPosts.map((post, index) => {
          if (post.node) {
            const { node } = post;
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <ListItem key={node.fields.slug} icon={getIconByIndex(index)}>
                <Link style={{ display: `block` }} to={node.fields.slug}>
                  {title}
                </Link>
              </ListItem>
            );
          }
          if (post.title) {
            const { title, link } = post;
            return (
              <ListItem key={`external-post-${index}`} icon={getIconByIndex(index)}>
                <a href={link} style={{ display: `block` }}>
                  {title} <ExternalLinkIcon />
                </a>
              </ListItem>
            );
          }
          return null;
        })}
      </List>
    </Section>
  );
};

Articles.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        excerpt: PropTypes.string,
        frontmatter: PropTypes.shape({
          title: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          description: PropTypes.string,
        }),
        fields: PropTypes.shape({
          slug: PropTypes.string.isRequired,
        }),
      }),
    })
  ),
  externalPosts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};

Articles.defaultProps = {
  posts: [],
  externalPosts: [],
};

export default Articles;
