import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Section from './section';
import List from './section/list';
import ListItem from './section/listItem';

const icons = ['📘', '📗', '📙', '📕'];
const getIconByIndex = index => icons[index % icons.length];

const Articles = ({ posts }) => (
  <Section id="articles-section" title="Articles">
    <List>
      {posts.map(({ node }, index) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <ListItem key={node.fields.slug} icon={getIconByIndex(index)}>
            <Link style={{ display: `block` }} to={node.fields.slug}>
              {title}
            </Link>
          </ListItem>
        );
      })}
    </List>
  </Section>
);

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
  ).isRequired,
};

export default Articles;
