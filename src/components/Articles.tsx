import React from 'react';
import { Link } from 'gatsby';

import Section from './Shared/Section';
import { List, ListItem } from './Shared/List';
import ExternalLinkIcon from '../icons/external-link.svg';
import { ExternalPosts, Post } from '../types/siteMetadata';

const ICONS = ['📘', '📗', '📙', '📕'];
const getIconByIndex = (index: number): string => ICONS[index % ICONS.length];

interface ArticlesProps {
  posts: Post[];
  externalPosts: ExternalPosts[];
}

const Articles: React.FC<ArticlesProps> = ({ posts = [], externalPosts = [] }) => {
  if ([...posts, ...externalPosts].length === 0) {
    return null;
  }

  return (
    <Section title="Articles">
      <List>
        {posts.map((post, index) => {
          const { node } = post;
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <ListItem key={node.fields.slug} $icon={getIconByIndex(index)}>
              <Link to={node.fields.slug}>{title}</Link>
            </ListItem>
          );
        })}
        {externalPosts.map((post, index) => {
          const { title, link } = post;
          // pick up where posts left off for icon index
          const iconIndex = index + posts.length;
          return (
            <ListItem key={`external-post-${index}`} $icon={getIconByIndex(iconIndex)}>
              <a href={link}>
                {title} <ExternalLinkIcon />
              </a>
            </ListItem>
          );
        })}
      </List>
    </Section>
  );
};

export default Articles;
